import Image from "next/image";

import img1 from "@public/assets/images/joshua-oluwagbemiga-Jq0coU4cdFE-unsplash.jpg";
import img2 from "@public/assets/images/22_0_32_1sierra_leone_child_health_16.jpg";
import img3 from "@public/assets/images/alexandre-barbosa-gynSn9H2-Xo-unsplash.jpg";
import img4 from "@public/assets/images/Children washing hands 1_.jpg";
import img5 from "@public/assets/images/craig-philbrick-kfxPVP_7P7U-unsplash.jpg";
import img6 from "@public/assets/images/hanna-morris-3EkT6xb4K9w-unsplash.jpg";
import img7 from "@public/assets/images/ball.jpg";
import img8 from "@public/assets/images/annie-spratt-cVEOh_JJmEE-unsplash.jpg";
import img9 from "@public/assets/images/boooo.jpg";
import img10 from "@public/assets/images/doo.jpg";

export default function CarouselSlider() {
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

  return (
    <div className="whitespace-nowrap flex w-full my-20">
      <div className="logoSlide">
        <div className="w-56 h-64 rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img1}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-64 rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img2}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-64 rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img3}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-64 rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img4}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-64 rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img5}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-64 rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img6}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-64 rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img7}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-64 rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img8}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-64 rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img9}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-64 rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img10}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
      </div>

      <div className="logoSlide">
        <div className="w-56 h-64 rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img1}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-64 rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img2}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-64 rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img3}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-64 rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img4}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-64 rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img5}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-64 rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img6}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-64 rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img7}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-64 rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img8}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-64 rounded-3xl overflow-hidden inline-block mx-3">
          <Image
            src={img9}
            alt="img"
            className="object-cover h-full"
            priority
          />
        </div>
        <div className="w-56 h-64 rounded-3xl overflow-hidden inline-block mx-3">
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
