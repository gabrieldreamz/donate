"use client";
import { useState } from "react";

export default function CustomAmount() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col gap-5 sm:gap-3">
      <button
        className="bg-blue-500 p-2 text-white active:opacity-60 duration-150"
        onClick={() => setIsVisible((prev) => !prev)}
      >
        + Custom amount
      </button>
      {isVisible && (
        <input
          type="number"
          placeholder="Enter amount"
          className="p-2 outline-none border border-gray-300 rounded-none"
        />
      )}
    </div>
  );
}
