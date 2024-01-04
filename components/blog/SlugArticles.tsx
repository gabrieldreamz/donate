"use client";

import { useState } from "react";

import Date from "./slug-articles/Date";
import Description from "./slug-articles/Description";
import SlugImage from "./slug-articles/SlugImage";
import Title from "./slug-articles/Title";

import img from "@public/assets/images/joshua-oluwagbemiga-Jq0coU4cdFE-unsplash.jpg";
import Share from "./slug-articles/Share";

export default function SlugArticles() {
  const [description, setDescription] = useState([
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe voluptate ratione dolores suscipit voluptatem beatae vitae mollitia, error quidem ex! Distinctio id dolorum asperiores maxime quibusdam minima quisquam ad possimus quod! Animi, veritatis! Cum nisi excepturi mollitia itaque ipsum, molestiae, a, dolor sint aliquam voluptates necessitatibus repellendus voluptate officiis!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe voluptate ratione dolores suscipit voluptatem beatae vitae mollitia, error quidem ex! Distinctio id dolorum asperiores maxime quibusdam minima quisquam ad possimus quod! Animi, veritatis! Cum nisi excepturi mollitia itaque ipsum, molestiae, a, dolor sint aliquam voluptates necessitatibus repellendus voluptate officiis!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe voluptate ratione dolores suscipit voluptatem beatae vitae mollitia, error quidem ex! Distinctio id dolorum asperiores maxime quibusdam minima quisquam ad possimus quod! Animi, veritatis! Cum nisi excepturi mollitia itaque ipsum, molestiae, a, dolor sint aliquam voluptates necessitatibus repellendus voluptate officiis!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, enim! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe voluptate ratione dolores suscipit voluptatem beatae vitae mollitia, error quidem ex! Distinctio id dolorum asperiores maxime quibusdam minima quisquam ad possimus quod! Animi, veritatis! Cum nisi excepturi mollitia itaque ipsum, molestiae, a, dolor sint aliquam voluptates necessitatibus repellendus voluptate officiis!",
  ]);

  return (
    <>
      <p className="text-center w-full mx-auto mb-14 md:mb-20 bg-purple-200 font-medium text-dark/70 py-[10px]">
        Every donation counts, regardless of it&apos;s size
      </p>
      <main className="flex flex-col items-center gap-10  px-3 md:px-0">
        <div className="grid gap-4 md:gap-7">
          <Title />
          <Date />
        </div>
        <SlugImage img={img} />
        <div className="grid gap-10">
          <Description ArrText={description} />
          <Share />
        </div>
      </main>
    </>
  );
}
