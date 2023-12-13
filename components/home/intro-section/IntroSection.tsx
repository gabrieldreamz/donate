import CarouselSlider from "./Carousel";
import IntroText from "./IntroText";

export default function IntroSection() {
  return (
    <section className="flex items-center  flex-col">
      <p className="text-center mx-auto mb-12 mt-16 rounded-3xl bg-purple-200 font-medium text-dark   py-[10px] px-5">
        Over 3 million kids can be saved today
      </p>
      <IntroText />
      <CarouselSlider />
    </section>
  );
}
