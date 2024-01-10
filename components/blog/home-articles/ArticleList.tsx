"use client";

import { useEffect, useState } from "react";
import img from "@public/assets/images/joshua-oluwagbemiga-Jq0coU4cdFE-unsplash.jpg";
import ArticlesListCard from "./ArticleListCard";

import useFetch from "@utils/useFetch";

export default function ArticleList() {
  const { data, error, loading } = useFetch("/api/events?limit=6");

  return (
    <section className="flex justify-between flex-wrap max-w-[1000px] mx-auto mb-24 md:mb-32">
      {data?.map((article: any) => (
        <ArticlesListCard
          key={article.id}
          id={article.id}
          img={img}
          title={article.title}
          description={article.description}
          date={article.date}
          type={article.type}
          articleName={article.articleName}
        />
      ))}
    </section>
  );
}
