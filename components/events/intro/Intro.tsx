import React from "react";

import img from "@public/assets/images/joshua-oluwagbemiga-Jq0coU4cdFE-unsplash.jpg";
import Image from "next/image";
import CenterCard from "@shared/CenterCard";

export default function Intro() {
  return (
    <section>
      <CenterCard>
        <div className="px-3">
          <div className="w-full h-80 md:h-[600px] rounded-[2rem] mt-16 mb-32 rounde-[2rem] overflow-hidden flex items-center ">
            <Image src={img} alt="img" className="object-cover" />
          </div>
        </div>
      </CenterCard>
    </section>
  );
}
