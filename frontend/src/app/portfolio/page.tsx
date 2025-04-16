import PortfolioItem from 'components/PortfolioItem/PortfolioItem';
import { fetchStrapi } from 'utils/utils';
import { IPortfolioItem, IPortfolioPageData } from 'types';
import fallbackData from '../../content/portfolio-page.json' assert { type: 'json' };

export default async function Portfolio(): Promise<React.JSX.Element> {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/portfolio?populate[projects][populate][project_content]=true`;
  const content: IPortfolioPageData = (await fetchStrapi(url)) ?? fallbackData;

  return (
    <main className="max-w-screen flex min-h-screen flex-col items-center gap-6 px-4 pt-32 lg:px-16">
      <h2 className="py-4 text-4xl lg:text-5xl xl:text-6xl">{content.title}</h2>
      <p className="text-xl italic lg:text-2xl xl:text-3xl">{content.tagline}</p>
      <div
        className="flex w-full flex-col flex-wrap items-center justify-center gap-6 px-2 py-8 sm:flex-row"
        aria-label="Cristina Jimenéz's portfolio gallery"
      >
        {content.projects.map((item: IPortfolioItem, index: number) => {
          return (
            <PortfolioItem
              key={index}
              index={index}
              entry={item}
              classes="relative shadow-[0_5px_8px_2px_#0006] w-full hover-pop xs:w-[80%] sm:w-[40%] md:w-[30%] xl:w-[20%] overflow-hidden text-2xl lg:text-3xl rounded-[12%] aspect-square"
            />
          );
        })}
      </div>
    </main>
  );
}
