"use client";

import EventCard from "@components/home/events/EventCard";
import CenterCard from "@shared/CenterCard";
import HeaderTxt from "@shared/HeaderTxt";

import img1 from "@public/assets/images/Children washing hands 1_.jpg";
import img2 from "@public/assets/images/craig-philbrick-kfxPVP_7P7U-unsplash.jpg";
import img3 from "@public/assets/images/22_0_32_1sierra_leone_child_health_16.jpg";
import img4 from "@public/assets/images/rebekah-blocker-I2jnHoIilNk-unsplash.jpg";
import { useState } from "react";

export default function LatestEvents() {
  const [eventsData, setEventsData] = useState([
    {
      id: 1,
      title: "Clean Drinking water for kids",
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
    <section className="mb-20">
      <CenterCard>
        <div className="px-5 sm:px-10">
          <HeaderTxt />
          <div className="flex lg:flex-row items-center justify-center gap-14  sm:gap-14 md:gap-7 flex-wrap lg:flex-nowrap mt-7 md:mt-16">
            {eventsData.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                location={event.location}
                categorie={event.categorie}
                img={event.img}
                totalFunds={event.totalFunds}
                fundsRaised={event.fundsRaised}
              />
            ))}
          </div>
        </div>
      </CenterCard>
    </section>
  );
}
