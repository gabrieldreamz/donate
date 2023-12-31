import FormInput from "./FormInput";
import SectionHeader from "../contact-form/sectionHeader";
import CarouselSlider from "./CarouselSlider";
import WhyContact from "./WhyContact";

import { IoIosShareAlt } from "react-icons/io";

export default function Form() {
  return (
    <section className="flex flex-col gap-10 sm:p-7 sm:bg-white sm:w-[500px] md:order-1 lg:order-2">
      <FormInput />

      <div className="flex flex-col gap-9">
        <div>
          <SectionHeader text="Where have you found us?" />
          <div className="flex gap-3 mt-2">
            <CarouselSlider text={"Instagram"} />
            <CarouselSlider text={"Linkedin"} />
            <CarouselSlider text={"Twitter"} />
          </div>
        </div>

        <div>
          <SectionHeader text="How can we help?" />
          <div className="flex gap-3 mt-2">
            <CarouselSlider text={"Volunteer"} />
            <CarouselSlider text={"Egg Roll"} />
            <CarouselSlider text={"Muller"} />
          </div>
        </div>
      </div>

      {/* We'd love to hear from you component */}
      <WhyContact />

      <div className="flex justify-end  px-5 mt-2">
        <button className="text-center w-44 text-white rounded-[2rem] font-medium tracking-wide py-2 hover:opacity-90 active:opacity-80 duration-100 bg-blue-700 flex items-center justify-center gap-1">
          Send message <IoIosShareAlt />
        </button>
      </div>
    </section>
  );
}
