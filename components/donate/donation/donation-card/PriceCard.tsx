import { MouseEventHandler } from "react";

export default function PriceCard({
  price,
  onClickHandler,
  className,
}: {
  price: number;
  onClickHandler: MouseEventHandler<HTMLDivElement>;
  className: string;
}) {
  return (
    <div
      onClick={onClickHandler}
      className={`${className} border border-gray-300 py-2 px-4  rounded text-dark/80 sm:text-lg font-medium tracking-wide cursor-pointer duration-150`}
    >
      <sup>$</sup>
      {price}
    </div>
  );
}
