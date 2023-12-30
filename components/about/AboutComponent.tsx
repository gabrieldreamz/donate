// import CenterCard from "@shared/CenterCard";
import Volunteer from "@components/volunteer/Volunteer";
import HowItStarted from "./HowItStarted";
import Reviews from "./Reviews";

export default function AboutComponent() {
  return (
    <>
      <section className="flex flex-col lg:flex-row gap-7 md:gap-20 justify-center sm:items-center lg:items-start mb-20 md:my-20">
        <HowItStarted />
        <Reviews />
      </section>
      <Volunteer />
    </>
  );
}
