import Image from 'next/image';
import Link from 'next/link';
import YoutubeEmbed from 'components/YoutubeEmbed/YoutubeEmbed';
import ResultsBanner from '../ResultBanner/ResultsBanner';
import SocialMediaSection from 'components/SocialMediaSection/SocialMediaSection';
import ArticleItem from 'components/ArticleItem/ArticleItem';
import Carousel from 'components/Carousel/Carousel';
import LightboxGallery from 'components/LightboxGallery/LightboxGallery';
import { IProjectContent } from 'types';

interface ProjectLayoutProps {
  label: string;
  content: IProjectContent;
  classes?: string;
}

export default async function ProjectLayout({ label, content, classes }: ProjectLayoutProps) {
  // Styling for the project

  interface ThemeStyle {
    label: string;
    results: string;
  }
  const themeStyles: Record<string, ThemeStyle> = {
    'theme 1': { label: 'bg-bg-1 text-fg-2', results: 'bg-bg-1 text-fg-2' },
    'theme 2': { label: 'bg-bg-2 text-fg-2', results: 'bg-bg-2 text-fg-2' },
    'theme 3': { label: 'bg-bg-4 text-fg-1', results: 'bg-bg-2 text-fg-2' },
    'theme 4': { label: 'bg-bg-4 text-fg-1', results: 'bg-bg-4 text-fg-1' },
  };

  const defaultStyles = {
    label: 'bg-bg-1 text-fg-2',
    results: 'bg-bg-1 text-fg-2',
  };

  const backButtonColour = 'bg-[#222b] hover:bg-[#111c]';

  // Assign styles based on content.theme
  const { label: labelColor, results: resultsColor } = themeStyles[content.theme] || defaultStyles;

  return (
    <article className={classes}>
      <div className="mx-4 flex flex-col sm:px-10 lg:px-12">
        {/*---------------------------------------------------------------------------------------------------*/}
        {/* Label and description + cover/website link if applicable, or label and description only otherwise */}
        {/*---------------------------------------------------------------------------------------------------*/}
        {content.cover_image ? (
          // Responsive label + description + cover
          <div className="flex flex-col items-center gap-8 py-8 lg:gap-12 xl:flex-row xl:items-start xl:gap-20">
            <h2
              className={`${labelColor} mb-10 max-w-max self-start rounded-xl px-4 py-4 text-4xl lg:px-12 lg:text-5xl xl:hidden`}
            >
              {label}
            </h2>
            <aside className="relative aspect-square w-[90vw] shadow-2xl xs:w-[60vw] sm:w-[50vw] md:w-[40vw] lg:block">
              <Image
                src={`${content.cover_image}`}
                alt={`Image of ${label}`}
                fill
                priority
                sizes="100vw"
              />
              {content.website_url ? (
                <Link
                  href={content.website_url}
                  target="_blank"
                  aria-label={`Link to the ${label} website`}
                  className="absolute left-0 top-0 h-full w-full"
                />
              ) : null}
            </aside>
            <div className="flex flex-col gap-6 xl:w-[50vw]">
              <h2
                className={`${labelColor} mb-10 hidden max-w-max rounded-xl px-4 py-4 text-4xl lg:px-12 lg:text-5xl xl:block`}
              >
                {label}
              </h2>
              <p className="text-xl md:text-2xl">{content.description}</p>
            </div>
          </div>
        ) : (
          // Label and description only
          <div>
            <h2
              className={`${labelColor} mb-10 max-w-max rounded-xl px-4 py-4 text-4xl lg:px-12 lg:text-5xl`}
            >
              {label}
            </h2>
            <p
              className={
                content.description.length > 100
                  ? 'text-xl md:text-2xl'
                  : 'text-2xl md:text-3xl lg:text-4xl'
              }
            >
              {content.description}
            </p>
          </div>
        )}

        {/*---------------------------------------------*/}
        {/* Youtube Embed if applicable                 */}
        {/*---------------------------------------------*/}
        {content.video_url ? (
          <YoutubeEmbed
            url={content.video_url}
            classes="mx-6 my-16 aspect-video min-h-[250px] max-w-full self-center border-2 border-bg-1 sm:min-h-[400px] md:w-3/4"
          />
        ) : null}

        {/*-----------------------------------------------------------------*/}
        {/* LightboxGallery or Carousel for mobile viewports, if applicable */}
        {/*-----------------------------------------------------------------*/}

        {/* Carousel for mobile */}
        {content.gallery && content.gallery.length > 0 ? (
          <Carousel imageList={content.gallery} classes="w-full h-[80vh] lg:hidden" />
        ) : null}

        {/* Lightbox for large viewports */}
        {content.gallery && content.gallery.length > 0 ? (
          <LightboxGallery
            imageList={content.gallery}
            classes="hidden lg:flex gap-8 p-20 justify-around"
          />
        ) : null}

        {/*---------------------------------------------*/}
        {/* Social Media section if applicable          */}
        {/*---------------------------------------------*/}
        {content.social_media_section ? (
          <SocialMediaSection
            content={content.social_media_section}
            classes="flex min-h-[30vh] flex-col py-8 items-center"
          />
        ) : null}
      </div>

      {/*---------------------------------------------*/}
      {/* Results Banner if applicable                */}
      {/*---------------------------------------------*/}
      {content.results && content.results.length > 0 ? (
        <ResultsBanner results={content.results} classes={resultsColor} />
      ) : null}

      {/*---------------------------------------------*/}
      {/* Articles section if applicable              */}
      {/*---------------------------------------------*/}
      {content.articles && content.articles.length > 0 ? ( // content.articles is always at least an empty array
        <div className="flex flex-col items-center justify-center gap-12 px-10 pb-32 pt-12 sm:flex-row sm:flex-wrap sm:items-baseline sm:items-stretch sm:justify-between lg:px-20 xl:px-28">
          {content.articles?.map((item, index) => {
            return (
              <ArticleItem
                key={index}
                entry={item}
                classes="w-[90vw] xs:w-[75vw] sm:w-[40vw] md:w-[25vw] xl:[20vw]"
              />
            );
          })}
        </div>
      ) : null}

      {/*--------------------------------------*/}
      {/* Back to portfolio button             */}
      {/*--------------------------------------*/}
      <Link
        href={'/portfolio'}
        role="button"
        className={` ${backButtonColour} absolute bottom-0 left-1/2 mb-6 min-w-max -translate-x-1/2 content-center rounded-xl p-3 text-xl font-semibold text-fg-2 shadow-xl md:left-auto md:right-0 md:m-6 md:translate-x-0 md:self-end lg:p-5 xl:fixed`}
        aria-label="Go back to portfolio gallery"
      >
        Back to my portfolio
      </Link>
    </article>
  );
}
