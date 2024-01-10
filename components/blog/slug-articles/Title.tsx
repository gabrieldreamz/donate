import React from "react";

export default function Title({ text }: { text: string }) {
  return (
    <h1 className="text-3xl md:text-5xl md:font-medium  max-w-3xl text-center">
      {text}
    </h1>
  );
}
