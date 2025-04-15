import AboutDecoration from '../../components/AboutDecoration/AboutDecoration';
import { IAboutPageData } from 'types';
import { fetchStrapi } from 'utils/utils';
import fallbackData from '../../content/about-page.json' assert { type: 'json' };

export default async function About(): Promise<React.JSX.Element> {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/about?populate[aboutImages]=*`;
  const content: IAboutPageData = (await fetchStrapi(url)) ?? fallbackData;

  return (
    <main className="flex min-h-screen pt-16 lg:pt-32 2xl:px-8">
      <div className="flex-grow">
        <AboutDecoration imageList={content.aboutImages} classes="" />
      </div>
      <section
        className="flex flex-col p-5 text-lg sm:px-12 sm:text-xl md:px-16 md:text-2xl lg:px-24 xl:max-w-[66vw]"
        aria-label="Section describing Cristina Jiménez"
      >
        <h2 className="py-8 text-4xl italic md:text-5xl">{content.title}</h2>
        <em className="text-xl sm:text-2xl md:text-3xl">{content.intro}</em>
        <p>{content.text}</p>
      </section>
    </main>
  );
}
