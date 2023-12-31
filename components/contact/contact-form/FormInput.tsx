import React from "react";

export default function FormInput() {
  return (
    <form className="flex items-center gap-5">
      <div className="flex flex-col gap-2 w-full">
        <label className="text-dark" htmlFor="fullname">
          Full name
        </label>
        <input
          className="bg-transparent border-b border-gray-300 rounded-none outline-none text-sm py-1 placeholder:text-sm placeholder:text-dark/70"
          type="text"
          name="fullname"
          placeholder="Enter your name..."
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
        />
      </div>
    </form>
  );
}
