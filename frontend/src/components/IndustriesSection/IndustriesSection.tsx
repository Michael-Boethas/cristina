import Link from "next/link";
import Industry from "components/Industry/Industry";
import { IIndustryItem, IIndustriesSectionData } from "../../types";
import data from "../../content/industries-section.json" assert { type: "json" };

interface IndustriesSectionProps {
  classes?: string;
}

export default function IndustriesSection({
  classes,
}: IndustriesSectionProps): React.JSX.Element {
  const content: IIndustriesSectionData = data;

  return (
    <section
      id="industries-section"
      aria-label="Industries and companies Cristina Jiménez has workded for"
      //   className="industries-section__background relative flex min-h-[50vh] flex-col items-center gap-8 pb-12 sm:px-12 md:py-24"
      className={classes}
    >
      <h2 className="no-italic py-4 text-5xl lg:text-7xl">{content.title}</h2>
      <span className="p-4 text-center text-3xl">{content.tagline}</span>
      <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:flex-wrap sm:items-start sm:gap-16 lg:gap-12">
        {/* Iterated rendering of industries */}
        {content.industriesList.map(
          (industry: IIndustryItem, index: number) => {
            return <Industry key={index} entry={industry} />;
          },
        )}
      </div>
      {/* Sroll down button */}
      <div className="absolute bottom-0 right-0 hidden md:block">
        <Link href="#contact-form" role="button" aria-label="Scroll down">
          <i className="hover-fg-1 fa-solid fa-chevron-down p-8 text-5xl text-[#000a] xl:text-7xl" />
        </Link>
      </div>
    </section>
  );
}
