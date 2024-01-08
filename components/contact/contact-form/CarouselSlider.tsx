import React from "react";

export default function CarouselSlider({
  text,
  onClick,
  className,
}: {
  text: string;
  onClick: () => void;
  className: any;
}) {
  return (
    <div
      onClick={onClick}
      className={`${className} py-1 px-3 border border-dark rounded-[2rem] text-sm cursor-pointer`}
    >
      {text}
    </div>
  );
}
