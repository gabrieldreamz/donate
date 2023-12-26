export default function PriceCard({ price }: { price: number }) {
  return (
    <div className="border border-gray-300 py-2 px-4  rounded text-dark/80 sm:text-lg font-medium tracking-wide cursor-pointer lg:hover:bg-dark lg:hover:text-white duration-150">
      <sup>$</sup>
      {price}
    </div>
  );
}
