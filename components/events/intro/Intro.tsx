import img from "@public/assets/images/joshua-oluwagbemiga-Jq0coU4cdFE-unsplash.jpg";
import Image from "next/image";

export default function Intro() {
  return (
    <section>
      <>
        <div className="customLinear text-white relative w-full h-80 md:h-[600px] md:mt-16 mb-20 md:mb-32 overflow-hidden flex items-center lg:items-start">
          <Image src={img} alt="img" className="object-cover" />

          <div className="absolute z-10 px-5 md:px-20 top-[55%] lg:top-[60%] flex flex-col gap-1 md:gap-3">
            <h1 className="text-2xl md:text-5xl font-medium max-w-xs md:max-w-2xl">
              The need for medical attention
            </h1>
            <p className="max-w-xs md:max-w-3xl text-sm md:text-base">
              God talks about giving to the poor, so let's embrace that
            </p>
          </div>
        </div>
      </>
    </section>
  );
}
