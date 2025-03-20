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
          url: article[0] ? (article[0].metadata.image as string) : "",
          width: 800,
          height: 600,
          alt: article[0] ? article[0].title : "",
        },
      ],
    },
  };
}

export default function page({ params, searchParams }: Props) {
  return (
    <>
      <head>
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </head>
      <main className="flex flex-col justify-between h-screen">
        <div>
          <Navigation />
          <Article />
        </div>
        <Footer />
      </main>
    </>
  );
}
