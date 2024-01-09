"use client";

import CenterCard from "@shared/CenterCard";
import Link from "next/link";
import EventCard from "./EventCard";
import { useState } from "react";

import img1 from "@public/assets/images/Children washing hands 1_.jpg";
import img2 from "@public/assets/images/craig-philbrick-kfxPVP_7P7U-unsplash.jpg";
import img3 from "@public/assets/images/22_0_32_1sierra_leone_child_health_16.jpg";
import img4 from "@public/assets/images/rebekah-blocker-I2jnHoIilNk-unsplash.jpg";

export default function Events() {
  const [eventsData, setEventsData] = useState([
    {
      id: 1,
      title:
        "Clean Drinking water for kids lkdfjdslkfjlsdajflksjflsdakjflksadjfksdjfldsjfklsdjflkfjdl",
      categorie: "Children",
      location: "Nigeria",
      img: img1,
      totalFunds: 5000,
      fundsRaised: 3000,
    },
    {
      id: 2,
      title: "The need for medical attention",
      categorie: "Medical",
      location: "Uganda",
      img: img2,
      totalFunds: 1000,
      fundsRaised: 200,
    },
    {
      id: 3,
      title: "Urgent hearth transplant",
      categorie: "Medical",
      location: "Mexico",
      img: img3,
      totalFunds: 50000,
      fundsRaised: 35000,
    },
    {
      id: 4,
      title: "Save christmas for the kids",
      categorie: "Children",
      location: "Nigeria",
      img: img4,
      totalFunds: 3000,
      fundsRaised: 400,
    },
  ]);

  return (
    <CenterCard>
      <section className="px-5 sm:px-10 my-32 lg:my-44" id="featured">
        <div className="flex flex-col sm:flex-row sm:items-center gap-7 sm:justify-between">
          <h1 className="text-3xl text-dark text-center mob:px-10 md:px-0">
            Make someones{" "}
            <span className="text-green-400 sm:text-dark"> Life</span> by giving
            of yours
          </h1>
          <p className="sm:hidden text-dark/80 tracking-wide text-center">
            Your generosity can provide access to education, healthcare, and
            essential resources for those in need, empowering individuals and
            communities
          </p>
          <Link
            href="/blog"
            className="btnConfig2 w-32 sm:w-24 mx-auto sm:mx-0 h-12 sm:h-10 flex items-center justify-center mt-3 bg-dark text-sm whitespace-nowrap"
          >
            View all
          </Link>
        </div>
        <div className="flex lg:flex-row items-center justify-center gap-14  sm:gap-14 md:gap-7 flex-wrap lg:flex-nowrap mt-16">
          {eventsData.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              location={event.location}
              categorie={event.categorie}
              img={event.img}
              totalFunds={event.totalFunds}
              fundsRaised={event.fundsRaised}
            />
          ))}
        </div>
      </section>
    </CenterCard>
  );
}
