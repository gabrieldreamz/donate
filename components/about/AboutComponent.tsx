// import CenterCard from "@shared/CenterCard";
import HowItStarted from "./HowItStarted";
import Reviews from "./Reviews";

export default function AboutComponent() {
  return (
    <section className="flex flex-col lg:flex-row gap-5 justify-center items-center my-10 md:my-20">
      <HowItStarted />
      <Reviews />
    </section>
  );
}
