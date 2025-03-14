import AboutDecoration from "../../components/AboutDecoration/AboutDecoration";
import { IAboutPageData } from "types";
import { fetchStrapi } from "utils/utils";
import fallbackData from "../../content/about-page.json" assert { type: "json" };

export default async function About(): Promise<React.JSX.Element> {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/about`;
  const content: IAboutPageData = (await fetchStrapi(url)) ?? fallbackData;

  return (
    <main className="flex gap-6 pt-16 lg:pt-32">
      <AboutDecoration />
      <section
        className="flex flex-col items-stretch p-5 text-lg md:px-16 md:text-2xl lg:w-3/5 xl:w-4/5"
        aria-label="Section describing Cristina Jiménez"
      >
        <h2 className="py-8 text-4xl italic md:text-5xl">{content.title}</h2>
        <em className="text-xl md:text-3xl">{content.intro}</em>
        <p>{content.text}</p>
      </section>
    </main>
  );
}
