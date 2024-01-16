"use client";
import { useState } from "react";

export default function CustomAmount({
  customAmount,
}: {
  customAmount: Function;
}) {
  const [isVisible, setIsVisible] = useState(false);

  const amount = (amount: string) => {
    const parsedAmount = parseInt(amount);
    customAmount(parsedAmount);
  };

  return (
    <div className="flex flex-col gap-5 sm:gap-3">
      <button
        type="button"
        className="bg-blue-500 p-2 text-white active:opacity-60 duration-150"
        onClick={() => setIsVisible((prev) => !prev)}
      >
        + Custom amount
      </button>
      {isVisible && (
        <input
          onChange={(e) => amount(e.target.value)}
          type="number"
          placeholder="Enter amount"
          className="p-2 outline-none border border-gray-300 rounded-none"
        />
      )}
    </div>
  );
}
