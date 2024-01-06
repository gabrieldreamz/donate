import CenterCard from "@shared/CenterCard";
import Link from "next/link";
import Image from "next/image";

import test from "@public/assets/images/intro-2 (1).png";
import give from "@public/assets/icons/give-love.png";

export default function SubIntro() {
  return (
    <CenterCard>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 2xl:gap-36 mb-28 lg:mb-44 ">
        <div className="flex flex-col gap-7 items-center justify-center lg:items-start px-5">
          <h1 className="text-3xl lg:text-6xl lg:max-w-xs text-dark mt-24 lg:mt-0 text-center lg:text-start">
            What&apos;s Happening New
          </h1>
          <p className="text-dark/80 max-w-md tracking-wide text-center lg:text-start">
            Stay tuned for information about upcoming events, and initiatives.
            Join us in various campaigns to amplify our collective impact and
            contribute to causes that matter.
          </p>
          <Link href="/blog" className="buttonConfig bg-blue-500">
            Join us
          </Link>
        </div>
        <div className="px-3 lg:px-0 mt-8 lg:mt-0 flex items-center justify-center relative">
          <Image
            width={500}
            height={500}
            className="lg:w-[400px] 2xl:w-[500px]"
            src={test}
            alt="selfish shiiiii"
          />
          <Image
            src={give}
            alt=""
            width={44}
            height={44}
            className="absolute right-[20%] top-0"
          />
        </div>
      </div>
    </CenterCard>
  );
}
