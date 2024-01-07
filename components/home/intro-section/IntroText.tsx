import Link from "next/link";

import { FaCircleCheck } from "react-icons/fa6";

export default function IntroText() {
  return (
    <div className="sectionWrapper flex-col">
      <h1 className="text-4xl sm:text-5xl text-center 2xl:text-7xl text-dark">
        Empower change with every donation - your impact, our mission.
      </h1>
      <p className="px-3 text-dark font-medium text-center">
        Our donation platform is where passion meets purpose. Join us in making
        a meaningful impact - together, we can change lives.
      </p>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 sm:gap-3">
          <FaCircleCheck className="text-green-500 text-xl sm:text-2xl" />
          <p className="tracking-wide text-sm sm:text-base text-dark/80 font-medium">
            120 Volunteers
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 ">
          <FaCircleCheck className="text-green-500 text-xl sm:text-2xl" />
          <p className="tracking-wide text-sm sm:text-base text-dark/80 font-medium">
            1.2k Successful Events
          </p>
        </div>
      </div>

      <Link href="/donate/donation-plan" className="bg-dark buttonConfig">
        Support today
      </Link>
    </div>
  );
}
