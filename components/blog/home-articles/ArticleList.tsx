"use client";

import { useState } from "react";
import img from "@public/assets/images/joshua-oluwagbemiga-Jq0coU4cdFE-unsplash.jpg";
import ArticlesListCard from "./ArticleListCard";

export default function ArticleList() {
  const [articleData, setArticleData] = useState([
    {
      img: { img },
      title: "The need for medical attention",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, voluptatibus!",
      date: "1 Jan 2023",
      type: "Medical",
      articleName: "Gabriel Dream",
    },
  ]);

  return (
    <section className="flex justify-between flex-wrap max-w-[1000px] mx-auto mb-24 md:mb-32">
      <ArticlesListCard
        img={img}
        title="The need for medical attention"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, voluptatibus!"
        date="1 Jan 2023"
        type="Medical"
        articleName="Gabriel Dream"
      />
      <ArticlesListCard
        img={img}
        title="The need for medical attention"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, voluptatibus!"
        date="1 Jan 2023"
        type="Medical"
        articleName="Gabriel Dream"
      />
      <ArticlesListCard
        img={img}
        title="The need for medical attention"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, voluptatibus!"
        date="1 Jan 2023"
        type="Medical"
        articleName="Gabriel Dream"
      />
      <ArticlesListCard
        img={img}
        title="The need for medical attention"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, voluptatibus!"
        date="1 Jan 2023"
        type="Medical"
        articleName="Gabriel Dream"
      />
      <ArticlesListCard
        img={img}
        title="The need for medical attention"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, voluptatibus!"
        date="1 Jan 2023"
        type="Medical"
        articleName="Gabriel Dream"
      />
      <ArticlesListCard
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
