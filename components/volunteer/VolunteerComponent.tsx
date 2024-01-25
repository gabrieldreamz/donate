"use client";

import CenterCard from "@shared/CenterCard";
import CategoriesCard from "@components/home/categories/CategoriesCard";
import VolunteerForm from "./VolunteerForm";
import HeroComponent from "./HeroComponent";
import CategoriesData from "./CategoriesData";
import Intro from "./Intro";
import FormIntro from "./FormIntro";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import VolunteerSchema from "@validations/volunteerValidation";
import { useState } from "react";

export default function VolunteerComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(VolunteerSchema) });

  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSubmitToDB = async (data: any) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, foundus: "other", help: "volunteer" }),
      });

      if (!(res.status >= 200 && res.status < 300)) {
        throw new Error("Something went wrong, try again!");
      }

      setSuccessMsg(true);
      setTimeout(() => {
        setSuccessMsg(false);
      }, 10000);
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CenterCard>
      <section className="flex flex-col gap-3 mb-12 mt-7 md:mt-10">
        <Intro />
        <div className="flex items-stretch justify-center gap-5 sm:gap-7 mt-16 sm:mt-20 flex-wrap lg:flex-nowrap px-5">
          {CategoriesData.map((cat) => (
            <CategoriesCard
              key={cat.title}
              image={cat.image}
              title={cat.title}
              description={cat.description}
              color={cat.color}
            />
          ))}
        </div>
        <HeroComponent />
        <FormIntro />
        <VolunteerForm
          register={register}
          handleSubmit={handleSubmit(handleSubmitToDB)}
          errors={errors}
          isLoading={isLoading}
          successMsg={successMsg}
        />
      </section>
    </CenterCard>
  );
}
