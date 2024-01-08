"use client";

import { useSubscribe } from "@utils/useSubscribe";

export default function Intro() {
  const {
    handleSubscribe,
    isLoading,
    msg,
    serverErr,
    register,
    handleSubmit,
    errors,
  } = useSubscribe();

  return (
    <section className="px-5 md:px-10 xl:px-28 flex flex-col gap-7 lg:gap-0 lg:flex-row lg:justify-between lg:items-center my-2 md:my-10">
      <div className="grid gap-7">
        <div className="grid gap-2">
          <p className="text-lg text-dark/80 font-medium">Our Blog</p>
          <h1 className="text-4xl lg:text-5xl font-medium">
            Resources and insights
          </h1>
        </div>

        <form
          onSubmit={handleSubmit(handleSubscribe)}
          className="flex flex-col sm:flex-row gap-5 sm:gap-7 sm:items-start"
        >
          <div className="flex flex-col gap-2">
            <input
              type="email"
              {...register("email")}
              placeholder="Enter your email"
              className="bg-transparent border border-gray-300 outline-none rounded-[2rem] py-2 px-3 sm:w-72 focus:border-gray-500 duration-150 transition-all"
            />
            <p
              className={`tracking-wide ${
                errors.email || serverErr === true
                  ? "text-red-500"
                  : "text-green-500"
              } pl-2`}
            >
              {errors.email ? errors.email?.message : msg}
            </p>
          </div>
          <div className="flex gap-5 sm:gap-7 items-center">
            <button
              disabled={isLoading}
              type="submit"
              className="text-center sm:order-2 w-28 text-white rounded-[2rem] font-medium tracking-wide py-[0.6rem] hover:opacity-90 active:opacity-80 duration-100 bg-dark"
            >
              Subscribe
            </button>
            {isLoading && <span className="loader sm:order-1" />}
          </div>
        </form>
      </div>
      <p className="font-medium text-dark/80 lg:max-w-xs">
        Subscribe to get notified of the latest news articles, solutions and
        updates
      </p>
    </section>
  );
}
