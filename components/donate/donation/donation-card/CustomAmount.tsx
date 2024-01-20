"use client";
import { useState } from "react";

export default function CustomAmount({
  customAmount,
  isVisible,
  setIsVisible,
  currentDonationPriceERR,
}: {
  customAmount: Function;
  isVisible: boolean;
  setIsVisible: Function;
  currentDonationPriceERR: string;
}) {
  const amount = (amount: string) => {
    const parsedAmount = parseInt(amount);
    customAmount(parsedAmount);
  };

  return (
    <>
      <div className="flex flex-col gap-5 sm:gap-3">
        <button
          type="button"
          className="bg-blue-500 p-2 text-white active:opacity-60 duration-150"
          onClick={() => {
            amount("0");
            setIsVisible((prev: boolean) => !prev);
          }}
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
      <p className="text-red-500 text-sm">{currentDonationPriceERR}</p>
    </>
  );
}
