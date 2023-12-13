import CenterCard from "@shared/CenterCard";
import Link from "next/link";
import EventCard from "./EventCard";

export default function Events() {
  return (
    <CenterCard>
      <section className="px-5 sm:px-10 my-24 lg:my-44">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:justify-between">
          <h1 className="text-3xl text-dark">
            Make someones{" "}
            <span className="text-red-400 sm:text-dark"> Life</span> by giving
            of yours
          </h1>
          <p className="sm:hidden text-dark/80 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            veritatis asperiores est quae? Est error laudantium maxime? Possimus
            amet, et itaque vel culpa hic sequi.
          </p>
          <Link
            href=""
            className="btnConfig2 w-32 sm:w-24 h-12 sm:h-10 flex items-center justify-center mt-3 bg-dark text-sm whitespace-nowrap"
          >
            View all
          </Link>
        </div>
        <div className="flex lg:flex-row items-center justify-center gap-14  sm:gap-14 md:gap-7 flex-wrap lg:flex-nowrap mt-16">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </section>
    </CenterCard>
  );
}
