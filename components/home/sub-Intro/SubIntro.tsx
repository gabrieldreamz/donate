import CenterCard from "@shared/CenterCard";
import Link from "next/link";
import Image from "next/image";

import test from "@public/assets/images/drew.png";

export default function SubIntro() {
  return (
    <CenterCard>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 2xl:gap-36 mb-28 lg:mb-44 ">
        <div className="flex flex-col gap-7 items-center justify-center lg:items-start px-5">
          <h1 className="text-3xl lg:text-6xl lg:max-w-xs text-dark mt-24 lg:mt-0">
            What&apos;s Happening New
          </h1>
          <p className="text-dark/80 font-medium max-w-md text-center lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            voluptas minus
          </p>
          <Link href="#" className="buttonConfig bg-blue-500">
            Join us
          </Link>
        </div>
        <div className="px-3 lg:px-0 mt-8 lg:mt-0">
          <Image
            width={500}
            height={500}
            className="lg:w-[400px] 2xl:w-[500px]"
            src={test}
            alt="selfish shiiiii"
          />
        </div>
      </div>
    </CenterCard>
  );
}
