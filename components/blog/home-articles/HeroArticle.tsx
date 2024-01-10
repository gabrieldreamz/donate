"use client";

import img from "@public/assets/images/joshua-oluwagbemiga-Jq0coU4cdFE-unsplash.jpg";
import HeroArticleCard from "./HeroArticleCard";
import { useEffect } from "react";

export default function HeroArticle() {
  const fetchHeroArticle = async () => {
    const res = await fetch("/api/events/12345", { cache: "no-store" });
    const data = await res.json();
    console.log(data.id);
  };

  useEffect(() => {
    // fetchHeroArticle();
  }, []);

  return (
    <section className="mt-20 lg:mb-10 sm:mt-32 flex justify-center">
      <HeroArticleCard
        img={img}
        title="The need for medical attention"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, voluptatibus!"
        date="1 Jan 2023"
        type="Medical"
        articleName="Gabriel Dream"
      />
    </section>
  );
}
