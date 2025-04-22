import Link from 'next/link';
import Expertise from 'components/Expertise/Expertise';
import { fetchStrapi } from 'utils/utils';
import { IExpertiseItem, IExpertiseSectionData } from 'types';
import fallbackData from '../../content/expertise-section.json' assert { type: 'json' };

export interface IExpertiseSectionProps {
  classes?: string;
}

export default async function ExpertiseSection({
  classes,
}: IExpertiseSectionProps): Promise<React.JSX.Element> {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/expertise-section?populate=expertise`;
  const content: IExpertiseSectionData = (await fetchStrapi(url)) ?? fallbackData;

  return (
    <section
      id="expertise-section"
      aria-label="Description of Cristina Jiménez's work expertise"
      className={classes}
    >
      <h2 className="no-italic py-4 text-5xl lg:text-7xl">{content.title}</h2>
      <div className="flex h-full w-full flex-col items-center justify-evenly py-6 text-2xl sm:text-3xl md:flex-row md:flex-wrap md:items-start md:gap-12 lg:text-4xl">
        {/* Iterated rendering of expertise */}
        {content?.expertise?.map((item: IExpertiseItem, index: number) => {
          return <Expertise key={index} entry={item} />;
        })}
      </div>

      {/* Scroll down button */}
      <div className="absolute bottom-0 right-0 hidden md:block">
        <Link href="#industries-section" role="button" aria-label="Scroll down">
          <i className="hover-text-1 fa-solid fa-chevron-down p-8 text-5xl text-[#000a] xl:text-7xl" />
        </Link>
      </div>
    </section>
  );
}
