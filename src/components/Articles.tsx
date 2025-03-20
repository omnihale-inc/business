"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import type { ArticleType, IncreaseArticle } from "@/types";

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Array<ArticleType>>([]);
  const [renderedArticles, setRenderedArticles] = useState<Array<ArticleType>>(
    []
  );
  const [articlesCursor, setArticleCursor] = useState(0);
  const [offline, setOffline] = useState(false);

  useEffect(() => {
    // Fetch data and set them in reverse order, also handles
    // rendering the first set of articles to the screen
    (async () => {
      const data = await fetch("/data.json");
      const response: { articles: [] } = await data.json();
      setArticles(response.articles.reverse());

      // Creates increase article object with common value.
      const increaseArticle = {
        articlesCursor,
        setRenderedArticles,
        setArticleCursor,
        articles: response.articles,
      };

      // Load articles based on session storage article cursor
      const sessionArticleCursor = sessionStorage.getItem("article-cursor");
      if (sessionArticleCursor && parseInt(sessionArticleCursor) > 0) {
        const sessionArticleCursorNumber = parseInt(sessionArticleCursor);

        addArticlesToScreen({
          ...increaseArticle,
          isSession: true,
          sessionCursor: sessionArticleCursorNumber,
        });
      } else {
        addArticlesToScreen({ ...increaseArticle, isSession: false });
      }
    })();
  }, [offline]);

  useEffect(() => {
    // Handles network state accordingly
    window.addEventListener("offline", () => {
      setOffline(true);
    });
    window.addEventListener("online", () => {
      setOffline(false);
    });
    return () => {
      window.removeEventListener("offline", () => setOffline(true));
      window.removeEventListener("online", () => setOffline(false));
    };
  }, []);

  const addMoreHandler = () => {
    const increaseArticle: IncreaseArticle = {
      articlesCursor,
      articles,
      setRenderedArticles,
      setArticleCursor,
      isSession: false,
    };
    addArticlesToScreen(increaseArticle);
  };

  return (
    <section className="w-5/6 max-w-5xl mx-auto mt-44 lg:mt-32">
      <button className="text-blue-700 text-sm my-4 text-center">
        We post daily on here.
      </button>
      <h2 className="mt-10 lg:mt-36 mb-6 lg:mb-6 text-sm lg:text-2xl text-center lg:text-left font-semibold">
        Articles
      </h2>
      <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
        {renderedArticles.length > 0 ? (
          renderedArticles.map((article, index) => (
            <article key={index} className="basis-80 mb-10">
              <Link href={`/bizscribes/${article.id}`}>
                <div className="relative h-44 mb-3">
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <p className="text-blue-700 text-sm lg:text-base hover:font-medium">
                  {article.title}
                </p>
              </Link>
            </article>
          ))
        ) : !offline ? (
          <div className="grid place-items-center w-full h-full -mt-4">
            <div>
              <video
                className="h-16 w-16"
                src="/loading.webM"
                muted
                autoPlay
                loop
              ></video>
            </div>
            <p className="text-sm text-center lg:text-base">Loading ...</p>
          </div>
        ) : (
          <div className="grid place-items-center w-full h-full -mt-4">
            <div>
              <video
                className="h-16 w-16"
                src="/offline.webM"
                muted
                autoPlay
                loop
              ></video>
            </div>
            <p className="text-xs lg:text-base text-center text-red-500">
              Currently offline
            </p>
          </div>
        )}
      </div>
      {articlesCursor < articles.length && (
        <button
          className="block text-center font-semibold w-full mb-5 lg:mb-7"
          onClick={addMoreHandler}
        >
          Add more
        </button>
      )}
    </section>
  );
};

const CURSOR_VALUE = 3;
function addArticlesToScreen(increase: IncreaseArticle) {
  const {
    articles,
    articlesCursor,
    isSession,
    setArticleCursor,
    setRenderedArticles,
    sessionCursor,
  } = increase;
  const articlesToRender: ArticleType[] = [];

  // Increase the cursor value by if it hasn't exceed the articles length
  // otherwise the newArticlesCursorPosition will be set to the articles length
  // value
  const newArticlesCursor = isSession
    ? sessionCursor
    : articlesCursor + CURSOR_VALUE < articles.length
    ? articlesCursor + CURSOR_VALUE
    : articles.length;

  if (newArticlesCursor) {
    // Adds articles to renderedArticles
    for (let i = 0; i < newArticlesCursor; i++) {
      articlesToRender.push(articles[i]);
    }
    // Adds newArticleCursor to session storage
    sessionStorage.setItem("article-cursor", newArticlesCursor.toString());

    setRenderedArticles([...articlesToRender]);
    setArticleCursor(newArticlesCursor);
  }
}

export default Articles;
