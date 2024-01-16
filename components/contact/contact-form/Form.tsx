"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import FormInput from "./FormInput";
import SectionHeader from "../contact-form/sectionHeader";
import CarouselSlider from "./CarouselSlider";
import WhyContact from "./WhyContact";
import { CarouselFoundUsData, CarouselHelpData } from "../Data";

import { IoIosShareAlt } from "react-icons/io";
import contactSchema from "@validations/contact";
import sendEmail from "@utils/SendEmail";

export default function Form() {
  const [selectedFoundUsValue, setSelectedFoundUsValue] = useState<
    number | null
  >(null);

  const [selectedHelpValue, setSelectedHelpValue] = useState<number | null>(
    null
  );

  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [serverErr, setServerErr] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(contactSchema) });

  const handleContactSubmit = async function (data: any) {
    try {
      setIsLoading(true);
      setMsg("");
      setServerErr(false);
      const foundus =
        selectedFoundUsValue !== null
          ? CarouselFoundUsData[(selectedFoundUsValue as number) - 1].text
          : CarouselFoundUsData[CarouselFoundUsData.length - 1].text;

      const help =
        selectedHelpValue !== null
          ? CarouselHelpData[(selectedHelpValue as number) - 1].text
          : CarouselHelpData[CarouselHelpData.length - 1].text;

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, foundus, help }),
      });
      await sendEmail(data.email);

      if (!(res.status >= 200 && res.status < 300)) {
        throw new Error("Something went wrong, try again!");
      }

      const reData = await res.json();
      setMsg(reData.message);
      setTimeout(() => setMsg(""), 9000);
      setSelectedFoundUsValue(null);
      setSelectedHelpValue(null);
      reset();
    } catch (error: any) {
      console.error(error);
      setServerErr(true);
      setMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  //Functions for getting the current id of the selected fields
  const getSelectedFoundUsState = (id: number) => setSelectedFoundUsValue(id);
  const getSelectedHelpState = (id: number) => setSelectedHelpValue(id);

  //JSX
  return (
    <form
      className="flex flex-col gap-10 sm:p-7 sm:bg-white sm:w-[500px] md:order-1 lg:order-2"
      onSubmit={handleSubmit(handleContactSubmit)}
    >
      <FormInput register={register} errors={errors} />

      <div className="flex flex-col gap-9">
        <div>
          <SectionHeader text="Where have you found us?" />
          <div className="flex gap-x-3 gap-y-4 mt-3 flex-wrap">
            {CarouselFoundUsData.map((social) => (
              <CarouselSlider
                key={social.id}
                text={social.text}
                onClick={() => getSelectedFoundUsState(social.id)}
                className={
                  selectedFoundUsValue === social.id ? "activeCarouselItem" : ""
                }
              />
            ))}
          </div>
        </div>

        <div>
          <SectionHeader text="How can we help?" />
          <div className="flex gap-x-3 gap-y-4 mt-3 flex-wrap">
            {CarouselHelpData.map((help) => (
              <CarouselSlider
                key={help.id}
                text={help.text}
                onClick={() => getSelectedHelpState(help.id)}
                className={
                  selectedHelpValue === help.id ? "activeCarouselItem" : ""
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* We'd love to hear from you, component */}
      <WhyContact
        register={register}
        errors={errors}
        serverErr={serverErr}
        msg={msg}
      />

      <div className="flex justify-end items-center gap-7  px-5 mt-2">
        {isLoading && <span className="loader" />}
        <button
          type="submit"
          className="text-center w-44 text-white rounded-[2rem] font-medium tracking-wide py-2 hover:opacity-90 active:opacity-80 duration-100 bg-blue-700 flex items-center justify-center gap-1"
        >
          Send message <IoIosShareAlt />
        </button>
      </div>
    </form>
  );
}
