import Link from "next/link";
import ExpertiseSection from "components/ExpertiseSection/ExpertiseSection";
import Industry from "components/Industry/Industry";
import ContactForm from "components/ContactForm/ContactForm";
import { renderWithLineBreaks } from "utils/utils";
import { IndustryContent } from "../../types";
import content from "../../content/home-content.json" assert { type: "json" };

export default function Home(): React.JSX.Element {
  const introText = renderWithLineBreaks(content.introduction);

  return (
    <main className="max-w-screen flex min-h-screen flex-col overflow-hidden">
      {/* Introduction */}
      <section
        id="intro-section"
        aria-label="Short introduction of Cristina Jiménez"
        className="intro__content--animation introduction__background relative flex min-h-screen flex-col gap-16 px-4 pb-28 pt-52 md:px-24 xl:justify-end"
      >
        <p className="rounded-xl bg-bg-5-transparent p-6 text-2xl sm:p-12 sm:text-3xl lg:text-4xl xl:w-1/2">
          <span className="text-[115%] font-medium">
            {introText.slice(0, 1)}
          </span>
          {introText.slice(1)}
        </p>
        <div className="flex flex-col items-center gap-6 text-center text-lg text-fg-2 md:w-1/3 md:w-full md:items-start md:text-2xl lg:w-2/3 xl:w-1/2 xl:flex-row 2xl:w-1/3">
          <Link
            href="/portfolio"
            role="button"
            aria-label="Check out Cristina Jiménez's portfolio"
            className="hover-bg-1 w-2/3 content-center rounded-xl bg-bg-2 p-3 sm:w-1/2 sm:self-stretch"
          >
            Check out my portfolio
          </Link>
          <Link
            href="/resume"
            role="button"
            aria-label="View Cristina Jiménez's career"
            className="hover-bg-1 w-2/3 content-center rounded-xl bg-bg-2 p-3 sm:w-1/2 sm:self-stretch"
          >
            See my Resume
          </Link>
        </div>
        {/* Sroll down button */}
        <div className="absolute bottom-16 right-0 hidden md:block">
          <Link
            href="#expertise-section"
            role="button"
            aria-label="Scroll down"
          >
            <i className="hover-fg-1 fa-solid fa-chevron-down p-8 text-5xl text-[--bg-2] xl:text-7xl" />
          </Link>
        </div>
      </section>

      {/* Expertise section */}
      <ExpertiseSection
        content={content.expertise}
        classes="expertise-section__background relative flex min-h-screen flex-grow flex-col items-center gap-16 bg-bg-4 md:gap-28 md:pt-28"
      />

      {/* Industries section */}
      <section
        id="industries-section"
        aria-label="Industries and companies Cristina Jiménez has workded for"
        className="industries-section__background relative flex min-h-screen flex-col items-center gap-16 pb-12 sm:px-12 md:pt-28"
      >
        <h2 className="no-italic py-8 text-5xl lg:text-7xl">
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
        <div className="absolute bottom-16 right-0 hidden md:block">
          <Link href="#contact-form" role="button" aria-label="Scroll down">
            <i className="hover-fg-1 fa-solid fa-chevron-down p-8 text-5xl text-[#000a] xl:text-7xl" />
          </Link>
        </div>
      </section>

      {/* Contact form */}
      <section
        id="contact-form"
        className="relative flex flex-col items-center bg-bg-5 pb-16 md:min-h-screen md:pt-28"
        aria-label="Form to contact Cristina Jiménez"
      >
        <h2 className="no-italic p-8 text-4xl lg:text-5xl">
          Let&apos;s work together
        </h2>
        <ContactForm />

        {/* Sroll to top button */}
        <div className="absolute bottom-5 right-0 hidden md:block">
          <Link href="#intro-section" role="button" aria-label="Scroll to top">
            <div className="hover-fg-1 flex flex-col">
              <i className="fa-solid fa-chevron-up -mb-14 px-8 text-5xl text-[#000a] text-inherit xl:text-7xl" />
              <i className="fa-solid fa-chevron-up px-8 text-5xl text-[#000a] text-inherit xl:text-7xl" />
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
