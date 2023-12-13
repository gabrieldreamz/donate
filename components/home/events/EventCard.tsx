import Image from "next/image";
import Link from "next/link";

import { MdLocationPin, MdOutlineBookmark } from "react-icons/md";

import drew from "@public/assets/images/intro-2 (1).png";

export default function EventCard() {
  return (
    <div className="w-96 md:w-80 bg-white rounded-xl  overflow-hidden">
      <div className="h-56 md:h-44 bg-slate-300 overflow-hidden flex items-start justify-center">
        <Image src={drew} alt="drew" />
      </div>

      <div className="p-3 rounded-xl flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center text-blue-500">
            <MdOutlineBookmark className="text-blue text-lg " />{" "}
            <p className="text-sm font-medium ">Children</p>
          </div>
          <div className="flex gap-1 items-center text-yellow-500">
            <MdLocationPin className="text-blue text-lg" />{" "}
            <p className="text-sm font-medium ">Nigeria</p>
          </div>
        </div>

        <h1 className="font-medium text-lg">
          Donate for nutrition less poor children
        </h1>

        <div>
          <p className="font-medium text-sm text-dark/75 tracking-wide">
            <span className="text-dark">$2.50k</span> raised of $5.00k
          </p>
          <div className="w-full h-2 bg-gray-200 rounded-[2rem] mt-2"></div>
        </div>

        <div className="flex justify-end">
          <Link href={""} className="btnConfig2 text-sm bg-green-500">
            Donate
          </Link>
        </div>
      </div>
    </div>
  );
}
