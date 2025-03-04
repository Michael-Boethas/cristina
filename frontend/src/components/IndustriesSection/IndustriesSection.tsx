import Link from "next/link";
import Industry from "components/Industry/Industry";
import { useFetch } from "hooks/useFetch";
import { IIndustryItem, IIndustriesSectionData } from "../../types";
import fallbackData from "../../content/industries-section.json" assert { type: "json" };
interface IndustriesSectionProps {
  classes?: string;
}

export default function IndustriesSection({
  classes,
}: IndustriesSectionProps): React.JSX.Element {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/industries-section?populate[industries][populate]=companies`;
  const { data, loading } = useFetch<IIndustriesSectionData>(url);
  const content = data ?? fallbackData;

  return (
    <section
      id="industries-section"
      aria-label="Industries and companies Cristina Jiménez has workded for"
      className={classes}
    >
      <h2 className="no-italic py-4 text-5xl lg:text-7xl">{content.title}</h2>
      <span className="p-4 text-center text-3xl">{content.tagline}</span>
      <div className="flex flex-col items-center justify-center gap-6 text-4xl sm:flex-row sm:flex-wrap sm:items-start sm:gap-16 lg:gap-12">
        {/* Iterated rendering of industries */}
        {loading
          ? "Loading..."
          : content.industries.map((item: IIndustryItem, index: number) => {
              return <Industry key={index} entry={item} />;
            })}
      </div>
      {/* Scroll down button */}
      <div className="absolute bottom-0 right-0 hidden md:block">
        <Link href="#contact-form" role="button" aria-label="Scroll down">
          <i className="hover-fg-1 fa-solid fa-chevron-down p-8 text-5xl text-[--bg-2] xl:text-7xl" />
        </Link>
      </div>
    </section>
  );
}
