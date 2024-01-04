import Image, { StaticImageData } from "next/image";

export default function SlugImage({ img }: { img: StaticImageData }) {
  return (
    <div className="max-w-5xl h-80 sm:h-96 lg:h-[570px] rounded-lg overflow-hidden">
      <Image src={img} alt="Home alone" />
    </div>
  );
}
