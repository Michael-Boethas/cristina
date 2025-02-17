"use client";

import AboutDecoration from "../../components/AboutDecoration/AboutDecoration";
import { useFetch } from "hooks/useFetch";
import { IAboutPageData } from "types";
import fallbackData from "../../content/about-page.json" assert { type: "json" }; // Fallback

export default function About(): React.JSX.Element {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/about?populate=paragraphs`;
  const { data, loading } = useFetch<IAboutPageData>(url);

  const content = data ?? fallbackData;

  return (
    <main className="flex gap-6 pt-16 lg:pt-32">
      <AboutDecoration />
      <section
        className="flex flex-col items-stretch p-5 text-lg md:px-16 md:text-2xl lg:w-3/5 xl:w-4/5"
        aria-label="Section describing Cristina Jiménez"
      >
        <h2 className="py-8 text-4xl italic md:text-5xl">
          {loading ? "Loading..." : content.title}
        </h2>
        <em className="text-xl md:text-3xl">{content.intro}</em>
        {content.paragraphs?.map((item, index) => (
          <p key={index} className="py-2">
            {typeof item === "string" ? item : item.paragraph}
          </p>
        ))}
      </section>
    </main>
  );
}
