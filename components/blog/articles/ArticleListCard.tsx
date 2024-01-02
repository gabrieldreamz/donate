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

export default function ArticlesListCard({
  img,
  articleName,
  date,
  type,
  title,
  description,
}: ArticleCard) {
  return (
    <div className="w-[90%] lg:max-w-[480px] mx-auto lg:mx-0 mt-24 lg:mt-10">
      <div className="h-80 sm:h-96 lg:h-80 rounded-xl overflow-hidden relative mx-auto">
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

      <div className="flex justify-between mt-5 px-[1%] lg:px-[2%]">
        <div className="flex flex-col">
          <span className="text-sm text-green-500 font-medium">{date}</span>
          <h1 className="text-lg mob:text-xl lg:text-2xl  font-medium whitespace-nowrap overflow-hidden text-ellipsis max-w-[300px] md:max-w-xl">
            {title}
          </h1>
          <p className="text-sm mob:text-base text-dark/80 font-medium TxtClamp max-w-[300px] md:max-w-xl">
            {description}
          </p>
        </div>
        <MdOutlineArrowOutward className="text-xl" />
      </div>
    </div>
  );
}
