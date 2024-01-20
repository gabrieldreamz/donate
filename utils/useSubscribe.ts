import { yupResolver } from "@hookform/resolvers/yup";
import newsLetterEmailSchema from "@validations/NewsLetterEmail";
import { useState } from "react";
import { useForm } from "react-hook-form";
import sendEmail from "./SendEmail";

// This should be a custom hook if you want to use state and useForm
export function useSubscribe() {
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [serverErr, setServerErr] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(newsLetterEmailSchema),
  });

  const handleSubscribe = async (data: any) => {
    try {
      setIsLoading(true);
      setServerErr(false);
      setMsg("");
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!(res.status >= 200 && res.status < 300)) {
        throw new Error("Something went wrong, try again!");
      }
      sendEmail(data.email, "/api/emails/newsletter");

      setMsg("Thank you for Subscribing to our newsletter!");
      reset();
      setTimeout(() => setMsg(""), 15000);
    } catch (error: any) {
      setServerErr(true);
      setMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Return what's needed from the hook
  return {
    handleSubscribe,
    isLoading,
    msg,
    serverErr,
    register,
    handleSubmit,
    errors,
  };
}
