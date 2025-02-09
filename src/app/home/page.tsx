import Link from "next/link";
import Expertise from "components/Expertise/Expertise";
import Industry from "components/Industry/Industry";
import ContactForm from "components/ContactForm/ContactForm";
import { renderWithLineBreaks } from "utils/utils";
import { ExpertiseContent, IndustryContent } from "../../types";
import content from "../../content/home-content.json" assert { type: "json" };

export default function Home(): React.JSX.Element {
  const introText = renderWithLineBreaks(content.introduction);

  return (
    <main className="min-h-screen flex flex-col">
      {/* Introduction */}
      <section
        className="pt-36 px-8 md:px-24 pb-5"
        aria-label="Short introduction of Cristina Jiménez"
      >
        <p className="text-xl sm:text-2xl lg:text-3xl lg:w-2/3 xl:w-1/2">
          <span className="font-medium">{introText.slice(0, 1)}</span>
          {introText.slice(1)}
        </p>
        <div className="flex flex-col items-center text-fg-2 text-center pt-8 md:w-full md:items-start gap-6 text-lg md:text-2xl md:w-1/3 lg:w-2/3 xl:flex-row xl:w-1/2 2xl:w-1/3">
          <Link
            href="/portfolio"
            role="button"
            aria-label="Check out Cristina Jiménez's portfolio"
            className="hover-bg-1 xs:w-2/3 sm:w-1/2 bg-bg-2 p-3 self-stretch rounded-xl content-center"
          >
            Check out my portfolio
          </Link>
          <Link
            href="/resume"
            role="button"
            aria-label="View Cristina Jiménez's career"
            className="hover-bg-1 xs:w-2/3 sm:w-1/2 bg-bg-2 p-3 self-stretch rounded-xl content-center"
          >
            See my Resume
          </Link>
        </div>
      </section>

      {/* Expertise section */}
      <section
        className="flex flex-col flex-grow items-center bg-bg-4"
        aria-label="Description of Cristina Jiménez's work expertise"
      >
        <h2 className="text-5xl lg:text-6xl no-italic py-8">
          {content.expertise.title}
        </h2>
        <div className="w-full flex flex-col justify-evenly items-center py-6 text-2xl sm:text-3xl lg:text-4xl md:flex-row md:flex-wrap md:gap-12 md:items-start">
          {/* Iterated rendering of expertise */}
          {Object.entries(content.expertise) // Converting to array for map iteration
            .filter(([key]) => key !== "title") // Excluding the title field
            .map(([key, item]) => {
              return <Expertise key={key} entry={item as ExpertiseContent} />;
            })}
        </div>
      </section>

      {/* Industries section */}
      <section
        className="min-h-[60vh] flex flex-col items-center gap-12 pb-12 sm:px-12
                   industries-section__background"
        aria-label="Industries and companies Cristina Jiménez has workded for"
      >
        <h2 className="text-5xl lg:text-6xl no-italic py-8">
          {content.industries.title}
        </h2>
        <span className="text-3xl text-center p-4">
          {content.industries.tagline}
        </span>
        <div
          className="flex flex-col justify-center gap-6 sm:gap-16 lg:gap-12 items-center
                        sm:flex-row sm:flex-wrap sm:items-start"
        >
          {/* Iterated rendering of industries */}
          {Object.entries(content.industries) // Converting to array for map iteration
            .filter(([key]) => key !== "title" && key !== "tagline") // Excluding the title and tagline
            .map(([key, industry]) => {
              return <Industry key={key} entry={industry as IndustryContent} />;
            })}
        </div>
      </section>

      {/* Contact form */}
      <section
        className="min-h-[50vh] flex flex-col items-center bg-[var(--bg-5)]"
        aria-label="Form to contact Cristina Jiménez"
      >
        <h2 className="text-4xl lg:text-5xl no-italic p-8">
          Let&apos;s work together
        </h2>
        <ContactForm />
      </section>
    </main>
  );
}
