import Image from "next/image";
import donateImg from "@public/assets/images/intro-2 (1).png";

export default function DonateImg() {
  return (
    <Image
      src={donateImg}
      alt=""
      width={550}
      height={550}
      className="flex justify-center"
    />
  );
}
