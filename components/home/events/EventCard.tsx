import Link from "next/link";

import Image, { StaticImageData } from "next/image";
import { MdLocationPin, MdOutlineBookmark } from "react-icons/md";

interface EventRules {
  categorie: string;
  location: string;
  img: StaticImageData;
  title: string;
  totalFunds: number;
  fundsRaised: number;
  id: number;
}

export default function EventCard({
  categorie,
  location,
  img,
  title,
  totalFunds,
  fundsRaised,
  id,
}: EventRules) {
  const fractionUnits = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
  const transTotalFunds = totalFunds.toLocaleString("en-US", fractionUnits);
  const transFundsRaised = fundsRaised.toLocaleString("en-US", fractionUnits);

  const priceProgress = (fundsRaised / totalFunds) * 100;

  return (
    <div className="w-96 md:w-80 bg-white rounded-xl  overflow-hidden">
      <div className="h-56 md:h-44 bg-slate-300 overflow-hidden flex items-start justify-center">
        <Image src={img} alt={title} />
      </div>

      <div className="p-3 rounded-xl flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center text-blue-500">
            <MdOutlineBookmark className="text-blue text-lg " />
            <p className="text-sm font-medium ">{categorie}</p>
          </div>
          <div className="flex gap-1 items-center text-yellow-500">
            <MdLocationPin className="text-blue text-lg" />{" "}
            <p className="text-sm font-medium ">{location}</p>
          </div>
        </div>

        <h1 className="font-medium text-lg max-w-sm TxtClamp2">{title}</h1>

        <div>
          <p className="font-medium text-sm text-dark/75 tracking-wide">
            <span className="text-dark">
              ${transFundsRaised}
              {fundsRaised > 999 ? "k" : ""}
            </span>{" "}
            raised of ${transTotalFunds}
            {totalFunds > 999 ? "k" : ""}
          </p>
          <div className="w-full h-2 bg-gray-200 rounded-[2rem] mt-2 overflow-hidden">
            <div
              className="h-2 bg-green-500 rounded-[2rem]"
              style={{ width: priceProgress + "%" }}
            ></div>
          </div>
        </div>

        <div className="flex justify-end">
          <Link
            href={`/donate/${id}`}
            className="btnConfig2 text-sm bg-green-500"
          >
            Donate
          </Link>
        </div>
      </div>
    </div>
  );
}
