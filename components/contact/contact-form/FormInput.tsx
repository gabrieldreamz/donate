import React from "react";

type FormProps = {
  register: any;
};

export default function FormInput({ register }: FormProps) {
  return (
    <div className="flex items-center gap-5">
      <div className="flex flex-col gap-2 w-full">
        <label className="text-dark" htmlFor="fullname">
          Full name
        </label>
        <input
          className="bg-transparent border-b border-gray-300 rounded-none outline-none text-sm py-1 placeholder:text-sm placeholder:text-dark/70"
          type="text"
          name="fullname"
          placeholder="Enter your name..."
          {...register("Fullname")}
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label className="text-dark" htmlFor="email">
          Email
        </label>
        <input
          className="bg-transparent border-b border-gray-300 rounded-none outline-none text-sm py-1 placeholder:text-sm placeholder:text-dark/70"
          type="email"
          name="email"
          placeholder="Enter your email"
          {...register("email")}
        />
      </div>
    </div>
  );
}
