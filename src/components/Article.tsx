"use client";

import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { ArticleType } from "@/types";

const Article = () => {
  const id = usePathname().split("/")[2]; // extracts article id from url path;
  const [article, setArticle] = useState<ArticleType>();

  useEffect(() => {
    // Request articles and filter out the article chosen to read
    (async () => {
      const data = await fetch("/data.json");
      const response: { articles: [] } = await data.json();
      const article = response.articles.filter(
        (article: ArticleType) => article.id === id
      );
      setArticle(article[0]);
    })();
  }, [id]);
  return (
    <section className="flex flex-col-reverse lg:flex-row lg:justify-between mt-44 lg:mt-40 mx-auto max-w-6xl w-5/6">
      <div className="basis-3/5">
        <Suspense fallback={<div className="my-10">Loading Article</div>}>
          <div className="relative h-44 lg:h-60">
            <Image
              src={article ? article?.image : ""}
              alt="article"
              fill
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h2 className="mt-10 mb-5 text-2xl lg:text-4xl font-semibold">
            {article?.title}
          </h2>
          {article?.details.map((paragraph, index) => (
            <div key={index}>
              <h2 className="mt-12 mb-7 text-lg lg:text-2xl font-semibold">
                {paragraph.title}
              </h2>
              {paragraph.paragraphs.map((texts, index) => (
                <p
                  key={index}
                  className={
                    index === paragraph.paragraphs.length - 1
                      ? "font-semibold mb-3"
                      : "mb-3"
                  }
                >
                  {texts}
                </p>
              ))}
            </div>
          ))}
        </Suspense>
      </div>
      {/* <div className="flex lg:flex-col mb-10 gap-5" aria-label="ads">
        {ADS_CONTAINER.map((ADS) => (
          <div>{ADS}</div>
        ))}
      </div> */}
    </section>
  );
};

export default Article;
