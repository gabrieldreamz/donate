"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import CustomAmount from "./donation-card/CustomAmount";
import Options from "./donation-card/Options";
import PersonalInfo from "./donation-card/PersonalInfo";
import PriceCard from "./donation-card/PriceCard";
import Title from "./donation-card/Title";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DonateSchema from "@validations/donate";

const priceData = [25, 50, 100, 250, 500, 1000];

export default function DonationComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [carouselPrice, setCarouselPrice] = useState<number | null>(null);
  const [currentDonationPrice, setCurrentDonationPrice] = useState(0);
  const [currentDonationPriceERR, setCurrentDonationPriceERR] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  //radio buttons
  const [isAnonymousChecked, setIsAnonymousChecked] = useState(false);
  const [isMthDonationChecked, setIsMthDonationChecked] = useState(false);

  //next navigators
  const router = useRouter();
  const searchParams = useSearchParams();

  const setCurrentCarousel = (price: number) => {
    setCurrentDonationPrice(price);
    setIsVisible(false);
  };
  const getCustomAmout = (amount: number) => setCurrentDonationPrice(amount);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(DonateSchema),
  });

  //function for checking the type of payment
  const checkEndPoint = () => {
    if (isMthDonationChecked) return "/api/payment/subscriptions/monthly";
    if (searchParams.get("payment") === "onetime")
      return "/api/payment/onetime-payment";
    if (searchParams.get("payment") === "monthly")
      return "/api/payment/subscriptions/monthly";
    if (searchParams.get("payment") === "annaul")
      return "/api/payment/subscriptions/yearly";

    return "/api/payment/onetime-payment";
  };

  //submit to db and payment function
  const handleSubmitDB = async function (data: any) {
    try {
      setIsLoading(true);
      if (!currentDonationPrice || currentDonationPrice < 2) {
        setIsLoading(false);
        return setCurrentDonationPriceERR("You cannot donate a minimun of $2");
      }
      await fetch("/api/customer-details", {
        method: "POST",
        body: JSON.stringify({
          amount: currentDonationPrice,
          fullname: data.fullname,
          email: data.email,
          address: data.address,
          apt: data.apt,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = await fetch(checkEndPoint()!, {
        method: "POST",
        body: JSON.stringify({
          amount: currentDonationPrice,
          name: data.fullname,
          email: data.email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const resObj = await res.json();
      router.replace(resObj.data.data.link);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  //checks if there's a donation price
  useEffect(() => {
    if (currentDonationPrice || currentDonationPrice > 2)
      return setCurrentDonationPriceERR("");
  }, [currentDonationPrice]);

  useEffect(() => {
    if (searchParams.get("payment") === "monthly")
      setIsMthDonationChecked(true);
  }, []);

  return (
    <section className="sm:my-10 flex sm:items-center sm:justify-center py-10 sm:py-0 bg-white sm:bg-gray-100">
      <form
        onSubmit={handleSubmit(handleSubmitDB)}
        className="p-5 sm:p-10 sm:bg-white sm:w-fit flex flex-col gap-3"
      >
        <h1 className="text-xl font-medium">Hello There!</h1>
        <Title description="How much would you like to donate?" number={1} />
        <div className="flex gap-x-7 gap-y-4 flex-wrap max-w-md my-5">
          {priceData.map((price) => (
            <PriceCard
              price={price}
              key={price}
              onClickHandler={() => setCurrentCarousel(price)}
              className={
                currentDonationPrice === price
                  ? "bg-green-500 border-0 text-white"
                  : ""
              }
            />
          ))}
        </div>
        <CustomAmount
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          customAmount={getCustomAmout}
          currentDonationPriceERR={currentDonationPriceERR}
        />

        {/*Personal Details*/}
        <div className="mt-7 sm:mt-5">
          <Title description="Personal Info" number={2} />
          <PersonalInfo register={register} error={errors} />
        </div>

        {/*Options*/}
        <Options
          isAnonymousChecked={isAnonymousChecked}
          setIsAnonymousChecked={setIsAnonymousChecked}
          isMthDonationChecked={isMthDonationChecked}
          setIsMthDonationChecked={setIsMthDonationChecked}
        />

        <button
          type="submit"
          className={`flex items-center justify-center px-5 py-2 border-2 rounded-[2rem] mt-7 font-medium text-blue-500 border-blue-500 ${
            isLoading && "bg-blue-500 py-1"
          } active:text-white duration-150`}
        >
          {isLoading ? (
            <span className="loader2" />
          ) : (
            "Donate with Debit or Credit Card"
          )}
        </button>
      </form>
    </section>
  );
}
