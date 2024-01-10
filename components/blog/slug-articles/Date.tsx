import React from "react";

export default function Date({
  text,
  articleName,
}: {
  text: string;
  articleName: string;
}) {
  return (
    <span className="font-medium text-dark/80 text-center">
      {articleName}, {text}
    </span>
  );
}
