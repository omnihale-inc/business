import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import { ArticleType, Props } from "@/types";

import Article from "@/components/Article";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BASE_URL } from "@/url";

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const data = await fetch(`${BASE_URL}/data.json`);
  const response: { articles: [] } = await data.json();
  const article: ArticleType[] = response.articles.filter(
    (article: ArticleType) => article.id === id
  ); // extracts the article based on the article id;

  return {
    title: article[0] ? article[0].title : "",
    keywords: article[0] ? article[0].metadata.keywords : "",
    description: article[0] ? article[0].metadata.description : "",
    authors: article[0] ? article[0].metadata.authors : [],
    openGraph: {
      title: article[0] ? article[0].title : "",
      description: article[0] ? article[0].metadata.description : "",
      images: [
        {
          url: article[0]
            ? `https://omniaxus.com/_next/image?url=%2Farticles%2F${
                (article[0].image as string).split("/")[2]
              }&w=1920&q=75`
            : "",
          width: 800,
          height: 600,
          alt: article[0] ? article[0].title : "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article[0] ? article[0].title : "",
      description: article[0] ? article[0].metadata.description : "",
      images: {
        url: article[0]
          ? `https://omniaxus.com/_next/image?url=%2Farticles%2F${
              (article[0].image as string).split("/")[2]
            }&w=1920&q=75`
          : "",
        alt: article[0] ? article[0].title : "",
      },
    },
  };
}

export default function page({ params, searchParams }: Props) {
  return (
    <main className="flex flex-col justify-between h-screen">
      <div>
        <Navigation />
        <Article />
      </div>
      <Footer />
    </main>
  );
}
