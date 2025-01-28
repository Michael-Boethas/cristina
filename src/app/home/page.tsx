"use client";

import Link from "next/link";
import Expertise from "components/Expertise/Expertise";
import Industry from "components/Industry/Industry";
import { renderWithLineBreaks } from "utils/utils";
import { ExpertiseContent, IndustryContent } from "../../types";
import content from "../../content/home-content.json";

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen flex flex-col">
      <section
        className="pt-36 px-8 md:px-24 pb-5"
        aria-label="Short introduction of Cristina Jiménez"
      >
        <p className="text-xl sm:text-2xl lg:text-3xl lg:w-2/3 xl:w-1/2">
          <span className="font-medium">
            {renderWithLineBreaks(content.introduction).slice(0, 1)}
          </span>
          {renderWithLineBreaks(content.introduction).slice(1)}
        </p>
        <div className="flex flex-col items-center text-fg-2 text-center pt-8 md:w-full md:items-start gap-6 text-lg md:text-2xl md:w-1/3 lg:w-2/3 xl:flex-row xl:w-1/2 2xl:w-1/3">
          <Link
            href="/portfolio"
            className="xs:w-2/3 sm:w-1/2 bg-bg-2 p-3 self-stretch rounded-xl content-center"
          >
            Checkout my portfolio
          </Link>
          <Link
            href="/resume"
            className="xs:w-2/3 sm:w-1/2 bg-bg-2 p-3 self-stretch rounded-xl content-center"
          >
            See my Resume
          </Link>
        </div>
      </section>
      <section
        className="flex flex-col flex-grow items-center bg-bg-4"
        aria-label="Description of Cristina Jiménez's work expertise"
      >
        <h2 className="text-5xl lg:text-6xl no-italic py-8">
          {content.expertise.title}
        </h2>
        <div className="w-full flex flex-col justify-evenly items-center py-6 text-2xl sm:text-3xl lg:text-4xl md:flex-row md:flex-wrap md:gap-12 md:items-start">
          {Object.entries(content.expertise)
            .filter(([key]) => key !== "title") // Excluding the title field
            .map(([key, item]) => {
              return <Expertise key={key} entry={item as ExpertiseContent} />;
            })}
        </div>
      </section>
      <section
        className="flex flex-col flex-grow items-center industries-section__background"
        aria-label="Industries and companies Cristina Jiménez has workded for"
      >
        <h2 className="text-5xl lg:text-6xl no-italic py-8">
          {content.industries.title}
        </h2>
        <div className="w-full flex flex-col justify-evenly items-center ">
          {/* <Industry entry={content.industries["1"]} /> */}
          {Object.entries(content.industries)
            .filter(([key]) => key !== "title") // Excluding the title field
            .map(([key, item]) => {
              return <Industry key={key} entry={item as IndustryContent} />;
            })}
        </div>
      </section>
      <section
        className="flex flex-col flex-grow bg-bg-5"
        aria-label="Form to contact Cristina Jiménez"
      >
        <h2 className="text-4xl lg:text-5xl no-italic p-8">
          Let&apos;s work together
        </h2>

        {/* <ContactForm /> */}
      </section>
    </main>
  );
}
