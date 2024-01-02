import Image from "next/image";

import { MdOutlineArrowOutward } from "react-icons/md";

import img from "@public/assets/images/joshua-oluwagbemiga-Jq0coU4cdFE-unsplash.jpg";

export default function HeroArticle() {
  return (
    <section className="my-20 sm:my-32 flex justify-center">
      <div>
        <div className="w-[95%] lg:w-[1000px] h-96 md:h-[550px] rounded-3xl overflow-hidden relative mx-auto">
          <Image src={img} alt="Very cure orphan girl" />
          {/* Info overay */}
          <div className="absolute w-full h-20 md:h-24 bg-gray-700/70  bottom-0 border-t border-gray-500 flex items-center">
            <div className="w-full flex justify-between px-5 text-white/90 text-sm tracking-wide">
              <div>
                <h1>Gabriel Dream</h1>
                <p>1 Jan 2024</p>
              </div>
              <p>Medical</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-7 px-[5%] lg:px-[2%]">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-green-500 font-medium">
              1 Jan 2020
            </span>
            <h1 className="text-lg mob:text-2xl md:text-3xl font-medium whitespace-nowrap overflow-hidden text-ellipsis max-w-[300px] md:max-w-xl">
              The need for medical attention
            </h1>
            <p className="text-sm mob:text-base text-dark/80 font-medium TxtClamp max-w-[300px] md:max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
              voluptatibus
            </p>
          </div>
          <MdOutlineArrowOutward className="text-xl" />
        </div>
      </div>
    </section>
  );
}
