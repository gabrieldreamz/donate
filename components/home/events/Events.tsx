"use client";

import CenterCard from "@shared/CenterCard";
import Link from "next/link";
import EventCard from "./EventCard";
import { useEffect, useState } from "react";

interface EventCardProps {
  _id: string;
  title: string;
  location: string;
  categorie: string;
  img: string;
  totalFunds: number;
  fundsRaised: number;
}

export default function Events() {
  const [eventsData, setEventsData] = useState<EventCardProps[]>([]);

  const fetcData = async () => {
    const res = await fetch("/api/events?limit=4");

    const data = await res.json();
    setEventsData(data.data);
  };

  useEffect(() => {
    fetcData();
  }, []);

  return (
    <CenterCard>
      <section className="px-5 sm:px-10 my-32 lg:my-44" id="featured">
        <div className="flex flex-col sm:flex-row sm:items-center gap-7 sm:justify-between">
          <h1 className="text-3xl text-dark text-center ">
            Enhance <span className="text-green-400 sm:text-dark"> lives</span>{" "}
            through selflessly sharing
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
          {eventsData.map((event: any) => (
            <EventCard
              key={event._id}
              id={event._id}
              title={event.title}
              location={event.location}
              categorie={event.type}
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
