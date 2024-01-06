import Image from "next/image";
import giveLove from "@public/assets/icons/give-love.png";

export default function DonationPlanIntro() {
  return (
    <div className="max-w-7xl flex items-center gap-5 md:gap-8 flex-col">
      <Image src={giveLove} alt="love" width={64} height={64} />
      <h1 className="text-3xl sm:text-5xl text-center 2xl:text-7xl text-dark px-3 sm:px-0">
        Every contribution counts
      </h1>
      <hr className="border border-purple-100 w-[60%]" />
      <p className="px-3 text-dark/80 tracking-wide text-center max-w-5xl">
        Every donation, no matter the size, is a beacon of hope and a force for
        positive change. Together, we can create a ripple effect that transforms
        lives and builds a brighter future
      </p>
    </div>
  );
}
