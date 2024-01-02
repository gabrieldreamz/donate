import CenterCard from "@shared/CenterCard";
import Image, { StaticImageData } from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";

type ArticleCard = {
  img: StaticImageData;
  articleName: string;
  date: string;
  type: string;
  title: string;
  description: string;
};

export default function HeroArticleCard({
  img,
  articleName,
  date,
  type,
  title,
  description,
}: ArticleCard) {
  return (
    <CenterCard>
      <div className="w-[95%] lg:w-[80%] h-96 md:h-[550px] rounded-3xl overflow-hidden relative mx-auto">
        <Image src={img} alt={title} />
        {/* Info overay */}
        <div className="absolute w-full h-20 md:h-24 bg-gray-700/70  bottom-0 border-t border-gray-500 flex items-center">
          <div className="w-full flex justify-between px-5 text-white/90 text-sm tracking-wide">
            <div>
              <h1>{articleName}</h1>
              <p>{date}</p>
            </div>
            <p>{type}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-5 md:mt-7 px-[5%] lg:px-[11%]">
        <div className="flex flex-col">
          <span className="text-sm text-green-500 font-medium">{date}</span>
          <h1 className="text-lg mob:text-xl md:text-3xl font-medium whitespace-nowrap overflow-hidden text-ellipsis max-w-[300px] md:max-w-xl">
            {title}
          </h1>
          <p className="text-sm mob:text-base text-dark/80 TxtClamp max-w-[300px] md:max-w-xl">
            {description}
          </p>
        </div>
        <MdOutlineArrowOutward className="text-xl" />
      </div>
    </CenterCard>
  );
}
