import CenterCard from "@shared/CenterCard";
import Link from "next/link";

import test from "@public/assets/images/volunteer.png";
import Image from "next/image";

export default function HeroComponent() {
  return (
    <CenterCard>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 2xl:gap-36  mb-20 lg:my-36">
        <div className="flex flex-col gap-7 items-center justify-center lg:items-start px-5">
          <h1 className="text-3xl lg:text-6xl lg:max-w-lg text-dark mt-24 lg:mt-0 text-center lg:text-start">
            Become a Volunteer today
          </h1>
          <p className="text-dark/80 max-w-md tracking-wide text-center lg:text-start">
            Your dedication can spark change and create a brighter tomorrow.
            Ready to make a difference? Become a Volunteer today!
          </p>
          <Link href="#volunteer_form" className="buttonConfig bg-blue-500">
            Join us
          </Link>
        </div>
        <div className="px-3 lg:px-0 mt-8 lg:mt-0 flex items-center justify-center relative">
          <Image
            width={500}
            height={500}
            className="lg:w-[300px] 2xl:w-[400px]"
            src={test}
            alt="selfish shiiiii"
          />
        </div>
      </div>
    </CenterCard>
  );
}
