import Image from "next/image";

import intro from "@public/assets/images/joshua-oluwagbemiga-Jq0coU4cdFE-unsplash.jpg";

export default function Reviews() {
  return (
    <div className="grid gap-10">
      <div className="w-[90%] lg:w-[500px] h-96 overflow-hidden rounded-2xl mx-auto lg:mx-0">
        <Image src={intro} alt="A very cute girl" />
      </div>

      <div className="p-5 sm:bg-white rounded-2xl grid sm:grid-cols-2 gap-5">
        <div className="bg-white shadow shadow-gray-100 sm:shadow-none sm:bg-gray-100 p-3 rounded-xl">
          <span className="text-xl md:text-2xl font-medium">2.5</span>
          <p className="text-sm text-dark/80">Years Experience</p>
        </div>

        <div className="bg-white shadow shadow-gray-100 sm:shadow-none sm:bg-gray-100 p-3 rounded-xl">
          <span className="text-xl md:text-2xl font-medium">180</span>
          <p className="text-sm text-dark/80">Projects</p>
        </div>

        <div className="bg-white shadow shadow-gray-100 sm:shadow-none sm:bg-gray-100 p-3 rounded-xl">
          <span className="text-xl md:text-2xl font-medium">120</span>
          <p className="text-sm text-dark/80">Volunteers</p>
        </div>

        <div className="bg-white shadow shadow-gray-100 sm:shadow-none sm:bg-gray-100 p-3 rounded-xl">
          <span className="text-xl md:text-2xl font-medium">32+</span>
          <p className="text-sm text-dark/80">Workers</p>
        </div>
      </div>
    </div>
  );
}
