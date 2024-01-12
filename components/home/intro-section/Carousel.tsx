import Image from "next/image";

import img1 from "@public/assets/images/joshua-oluwagbemiga-Jq0coU4cdFE-unsplash.jpg";
import img2 from "@public/assets/images/img2.jpg";
import img3 from "@public/assets/images/img3.jpg";
import img4 from "@public/assets/images/img4.jpg";
import img5 from "@public/assets/images/img5.jpg";
import img6 from "@public/assets/images/img6.png";
import img7 from "@public/assets/images/img7.jpg";
import img8 from "@public/assets/images/img8.jpg";
import img9 from "@public/assets/images/img9.jpg";
import img10 from "@public/assets/images/img10.jpg";
export default function CarouselSlider() {
  return (
    <div className="whitespace-nowrap flex w-full my-20">
      <div className="logoSlide">
        <div className="w-56 h-[270px] rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img1}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-[270px] rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img2}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-[270px] rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img3}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-[270px] rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img4}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-[270px] rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img5}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-[270px] rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img6}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-[270px] rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img7}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-[270px] rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img8}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-[270px] rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img9}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-[270px] rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img10}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
      </div>

      <div className="logoSlide">
        <div className="w-56 h-[270px] rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img1}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-[270px] rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img2}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-[270px] rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img3}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-[270px] rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img4}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-[270px] rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img5}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-[270px] rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img6}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-[270px] rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img7}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-[270px] rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img8}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-[270px] rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img9}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-[270px] rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img10}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
      </div>
    </div>
  );
}

// const imageData: { src: any; alt: string }[] = [
//   { src: img1, alt: "img1" },
//   { src: img2, alt: "img2" },
//   { src: img3, alt: "img3" },
//   { src: img4, alt: "img4" },
//   { src: img5, alt: "img5" },
//   { src: img6, alt: "img6" },
//   { src: img7, alt: "img7" },
//   { src: img8, alt: "img8" },
// ];
