"use client";

import ArticlesListCard from "./ArticleListCard";

import useFetch from "@utils/useFetch";

export default function ArticleList() {
  const { data, error, loading } = useFetch("/api/events?limit=6");

  return (
    <section className="flex flex-wrap justify-center max-w-[1440px] gap-10 mb-24 md:mb-32">
      {data?.map((article: any) => (
        <ArticlesListCard
          key={article.id}
          id={article.id}
          img={article.img}
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
