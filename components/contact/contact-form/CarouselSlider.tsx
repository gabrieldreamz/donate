import React from "react";

export default function CarouselSlider({ text }: { text: string }) {
  return (
    <div className="py-1 px-3 border border-dark rounded-[2rem] text-sm">
      {text}
    </div>
  );
}
