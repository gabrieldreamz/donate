import Image, { StaticImageData } from "next/image";

interface Carddd {
  image: StaticImageData;
  title: string;
  description: string;
  color: string;
}

export default function CategoriesCard({
  image,
  title,
  description,
  color,
}: Carddd) {
  return (
    <div
      className={`bg-gray-200 w-96 sm:w-64 lg:w-80 rounded-xl p-5 flex flex-col sm:items-center gap-2 sm:gap-4`}
    >
      <div className="flex sm:flex-col gap-3 items-center">
        <div
          className={`h-10 w-10 sm:w-16 sm:h-16 rounded-[50%] bg-${color}-200 flex items-center justify-center`}
        >
          <Image src={image} alt={title} className="w-6 sm:w-8" />
        </div>
        <h1 className="text-lg font-medium">{title}</h1>
      </div>
      <p className="text-dark/80 sm:text-center">{description}</p>
    </div>
  );
}
