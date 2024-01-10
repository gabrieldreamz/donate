"use client";

import { useEffect, useState } from "react";

import Date from "./slug-articles/Date";
import Description from "./slug-articles/Description";
import SlugImage from "./slug-articles/SlugImage";
import Title from "./slug-articles/Title";

import img from "@public/assets/images/joshua-oluwagbemiga-Jq0coU4cdFE-unsplash.jpg";
import Share from "./slug-articles/Share";
import { useParams } from "next/navigation";

interface dataType {
  id?: string;
  title?: string;
  description?: [string];
  date?: string;
  type?: string;
  articleName?: string;
}

export default function SlugArticles() {
  const params = useParams();
  const [data, setData] = useState<dataType>({});

  useEffect(() => {
    const getSlugData = async () => {
      const res = await fetch(`/api/events/${params.articleId}`);
      const data = await res.json();

      const transformedData = {
        id: data.data._id,
        title: data.data.title,
        description: data.data.description,
        date: new globalThis.Date(data.data.createdAt).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "short",
            day: "numeric",
          }
        ),
        type: data.data.type,
        articleName: data.data.articleName,
      };

      setData(transformedData);
    };
    getSlugData();
  }, [params.articleId]);

  return (
    <>
      <p className="text-center w-full mx-auto mb-14 md:mb-20 bg-purple-200 font-medium text-dark/70 py-[10px]">
        Every donation counts, regardless of it&apos;s size
      </p>
      <main className="flex flex-col items-center gap-10  px-3 lg:px-0">
        <div className="grid gap-4 md:gap-7">
          <Title text={data.title as string} />
          <Date
            articleName={data.articleName as string}
            text={data.date as string}
          />
        </div>
        <SlugImage img={img} />
        <div className="grid gap-10">
          <Description ArrText={data.description as string[]} />
          <Share />
        </div>
      </main>
    </>
  );
}
