import Image from 'next/image';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import AboutPictures from '../../components/AboutPictures/AboutPictures';
import { IAboutPageData } from 'types';
import { fetchStrapi } from 'utils/utils';
import fallbackData from '../../content/about-page.json' assert { type: 'json' };

/**
 * About page component that displays information about Cristina Jiménez.
 * Fetches content from Strapi and renders the about section with images and markdown content.
 */
export default async function About(): Promise<React.JSX.Element> {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/about?populate[aboutImages]=*`;
  const content: IAboutPageData = (await fetchStrapi(url)) ?? fallbackData;

  return (
    <main className="flex min-h-screen pt-16 lg:pt-32 2xl:px-8">
      <div className="flex-grow">
        {/* About page decoration component */}
        <AboutPictures imageList={content.aboutImages} classes="" />
      </div>
      <section
        className="flex flex-col p-5 text-lg sm:px-12 sm:text-xl md:px-16 md:text-2xl lg:px-24 xl:max-w-[66vw]"
        aria-label="Section describing Cristina Jiménez"
      >
        <h2 className="py-6 text-4xl italic md:text-5xl">{content.title}</h2>

        {/* Text content with wrapped image */}
        <div className="relative">
          {/* Image for mobile viewports */}
          <Image
            src={content.aboutImages[content.aboutImages.length - 1].url}
            alt="Picture of Cristina Jiménez"
            width={300}
            height={400}
            className="my-8 aspect-square object-cover sm:ms-8 md:float-right md:ms-16 xl:hidden"
          />
          {/* Intro text */}
          <em className="my-4 block text-xl sm:text-2xl md:text-3xl">{content.intro}</em>

          <ReactMarkdown
            components={{
              p: (props) => <p className="prose text-xl md:text-2xl" {...props} />,
            }}
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
          >
            {content.text}
          </ReactMarkdown>
        </div>
      </section>
    </main>
  );
}
