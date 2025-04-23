import PortfolioItem from 'components/PortfolioItem/PortfolioItem';
import { fetchStrapi } from 'utils/utils';
import { IPortfolioItem, IPortfolioPageData } from 'types';
import fallbackData from '../../content/portfolio-page.json' assert { type: 'json' };

export default async function Portfolio(): Promise<React.JSX.Element> {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/portfolio?populate[projects][populate][project_content]=true`;
  const content: IPortfolioPageData = (await fetchStrapi(url)) ?? fallbackData;

  return (
    <main className="max-w-screen flex min-h-screen flex-col items-center gap-6 px-4 pb-16 pt-32 lg:px-16">
      <h2 className="py-4 text-4xl lg:text-5xl xl:text-6xl">{content.title}</h2>
      <p className="text-xl italic lg:text-2xl xl:text-3xl">{content.tagline}</p>
      <div
        className="grid w-full grid-cols-1 gap-6 px-8 py-8 sm:grid-cols-2 md:grid-cols-3 md:px-12 xl:grid-cols-4 xl:px-16 2xl:px-28"
        aria-label="Cristina Jimenéz's portfolio gallery"
      >
        {content.projects.map((item: IPortfolioItem, index: number) => (
          <PortfolioItem
            key={index}
            index={index}
            entry={item}
            classes="relative shadow-[0_5px_8px_2px_#0006] w-full hover-pop overflow-hidden text-2xl lg:text-3xl rounded-[12%] aspect-square"
          />
        ))}
      </div>
    </main>
  );
}
