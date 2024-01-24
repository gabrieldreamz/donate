import Image, { StaticImageData } from "next/image";

export default function SlugImage({ img }: { img: string }) {
  return (
    <div className="max-w-5xl h-80 sm:h-96 w-full sm:w-auto lg:h-[570px] rounded-lg overflow-hidden">
      <Image
        src={`/assets/images/${img}`}
        alt="Home alone"
        width={300}
        height={300}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
