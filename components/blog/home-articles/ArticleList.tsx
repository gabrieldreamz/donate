"use client";

import { useEffect, useState } from "react";
import img from "@public/assets/images/joshua-oluwagbemiga-Jq0coU4cdFE-unsplash.jpg";
import ArticlesListCard from "./ArticleListCard";

import useFetch from "@utils/useFetch";

export default function ArticleList() {
  const [articleData, setArticleData] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const data = await useFetch("/api/events?limit=6");
      setArticleData(data);
    })();
  }, []);

  return (
    <section className="flex justify-between flex-wrap max-w-[1000px] mx-auto mb-24 md:mb-32">
      {articleData.map((article: any) => (
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
