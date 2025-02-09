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
    <main className="flex min-h-screen flex-col">
      {/* Introduction */}
      <section
        id="intro-section"
        aria-label="Short introduction of Cristina Jiménez"
        className="relative flex min-h-screen flex-col gap-16 px-8 pt-36 md:px-24"
      >
        <p className="text-xl sm:text-2xl lg:w-2/3 lg:text-3xl xl:w-1/2">
          <span className="font-medium">{introText.slice(0, 1)}</span>
          {introText.slice(1)}
        </p>
        <div className="flex flex-col items-center gap-6 text-center text-lg text-fg-2 md:w-1/3 md:w-full md:items-start md:text-2xl lg:w-2/3 xl:w-1/2 xl:flex-row 2xl:w-1/3">
          <Link
            href="/portfolio"
            role="button"
            aria-label="Check out Cristina Jiménez's portfolio"
            className="hover-bg-1 content-center self-stretch rounded-xl bg-bg-2 p-3 xs:w-2/3 sm:w-1/2"
          >
            Check out my portfolio
          </Link>
          <Link
            href="/resume"
            role="button"
            aria-label="View Cristina Jiménez's career"
            className="hover-bg-1 content-center self-stretch rounded-xl bg-bg-2 p-3 xs:w-2/3 sm:w-1/2"
          >
            See my Resume
          </Link>
        </div>
        {/* Sroll down button */}
        <div className="absolute bottom-0 right-0">
          <Link
            href="#expertise-section"
            role="button"
            aria-label="Scroll down"
          >
            <i className="hover-fg-1 fa-solid fa-chevron-down p-8 text-6xl text-[var(--bg-2)]" />
          </Link>
        </div>
      </section>

      {/* Expertise section */}
      <section
        id="expertise-section"
        aria-label="Description of Cristina Jiménez's work expertise"
        className="relative flex flex-grow flex-col items-center bg-bg-4"
      >
        <h2 className="no-italic py-8 text-5xl lg:text-6xl">
          {content.expertise.title}
        </h2>
        <div className="flex w-full flex-col items-center justify-evenly py-6 text-2xl sm:text-3xl md:flex-row md:flex-wrap md:items-start md:gap-12 lg:text-4xl">
          {/* Iterated rendering of expertise */}
          {Object.entries(content.expertise) // Converting to array for map iteration
            .filter(([key]) => key !== "title") // Excluding the title field
            .map(([key, item]) => {
              return <Expertise key={key} entry={item as ExpertiseContent} />;
            })}
        </div>
        {/* Sroll down button */}
        <div className="absolute bottom-0 right-0">
          <Link
            href="#industries-section"
            role="button"
            aria-label="Scroll down"
          >
            <i className="hover-fg-1 fa-solid fa-chevron-down p-8 text-6xl text-[var(--bg-2)]" />
          </Link>
        </div>
      </section>

      {/* Industries section */}
      <section
        id="industries-section"
        aria-label="Industries and companies Cristina Jiménez has workded for"
        className="industries-section__background relative flex min-h-[60vh] flex-col items-center gap-12 pb-12 sm:px-12"
      >
        <h2 className="no-italic py-8 text-5xl lg:text-6xl">
          {content.industries.title}
        </h2>
        <span className="p-4 text-center text-3xl">
          {content.industries.tagline}
        </span>
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:flex-wrap sm:items-start sm:gap-16 lg:gap-12">
          {/* Iterated rendering of industries */}
          {Object.entries(content.industries) // Converting to array for map iteration
            .filter(([key]) => key !== "title" && key !== "tagline") // Excluding the title and tagline
            .map(([key, industry]) => {
              return <Industry key={key} entry={industry as IndustryContent} />;
            })}
        </div>

        {/* Sroll down button */}
        <div className="absolute bottom-0 right-0">
          <Link href="#contact-form" role="button" aria-label="Scroll down">
            <i className="hover-fg-1 fa-solid fa-chevron-down p-8 text-6xl text-[var(--bg-2)]" />
          </Link>
        </div>
      </section>

      {/* Contact form */}
      <section
        id="contact-form"
        className="flex min-h-[50vh] flex-col items-center bg-[var(--bg-5)]"
        aria-label="Form to contact Cristina Jiménez"
      >
        <h2 className="no-italic p-8 text-4xl lg:text-5xl">
          Let&apos;s work together
        </h2>
        <ContactForm />
      </section>
    </main>
  );
}
