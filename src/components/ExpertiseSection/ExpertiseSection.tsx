"use client";

import { useEffect } from "react";
import Link from "next/link";
import Expertise from "components/Expertise/Expertise";
import { viewportAddClasses } from "utils/utils";
import { ExpertiseContent, ExpertiseSectionInterface } from "types";

interface ExpertiseSectionProps {
  content: ExpertiseSectionInterface;
  classes: string;
}

export default function ExpertiseSection({
  content,
  classes,
}: ExpertiseSectionProps): React.JSX.Element {
  useEffect(() => {
    document.querySelectorAll("[Expertise]").forEach((expertiseCard, index) => {
      return viewportAddClasses(expertiseCard, "fade-in");
    });
  }, []);

  return (
    <section
      id="expertise-section"
      aria-label="Description of Cristina Jiménez's work expertise"
      className={classes}
    >
      <h2 className="no-italic py-8 text-5xl lg:text-7xl">{content.title}</h2>
      <div className="flex h-full w-full flex-col items-center justify-evenly py-6 text-2xl sm:text-3xl md:flex-row md:flex-wrap md:items-start md:gap-12 lg:text-4xl">
        {/* Iterated rendering of expertise */}
        {Object.entries(content.expertiseList) // Converting to array for map iteration
          .filter(([key]) => key !== "title") // Excluding the title field
          .map(([key, item]) => {
            return <Expertise key={key} entry={item as ExpertiseContent} />;
          })}
      </div>

      {/* Sroll down button */}
      <div className="absolute bottom-16 right-0 hidden md:block">
        <Link href="#industries-section" role="button" aria-label="Scroll down">
          <i className="hover-fg-1 fa-solid fa-chevron-down p-8 text-5xl text-[#000a] xl:text-7xl" />
        </Link>
      </div>
    </section>
  );
}
