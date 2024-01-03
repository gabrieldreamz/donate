import Image, { StaticImageData } from "next/image";

export default function SlugImage({ img }: { img: StaticImageData }) {
  return <Image src={img} alt="Home alone" />;
}
