"use client";

import PortfolioItem from "components/PortfolioItem/PortfolioItem";
import { useFetch } from "hooks/useFetch";
import { IPortfolioItem, IPortfolioPageData } from "types";
import fallbackData from "../../content/portfolio-page.json" assert { type: "json" }; // Fallback

export default function Portfolio(): React.JSX.Element {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/portfolio`;
  const { data } = useFetch<IPortfolioPageData>(url);
  const content = data ?? fallbackData;

  return (
    <main className="max-w-screen flex min-h-screen flex-col px-4 pt-32 lg:px-16">
      <h2 className="py-4 text-4xl lg:text-5xl xl:text-6xl">{content.title}</h2>
      <p className="text-xl italic lg:text-2xl xl:text-3xl">
        {content.tagline}
      </p>
      <div className="flex flex-col gap-8 md:flex-row md:flex-wrap">
        {content.projects.map((item: IPortfolioItem, index: number) => {
          return <PortfolioItem key={index} entry={item} />;
        })}
      </div>
    </main>
  );
}
