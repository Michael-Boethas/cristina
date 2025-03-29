import Image from "next/image";
import Link from "next/link";
import SocialMediaSection from "../../../components/SocialMediaSection/SocialMediaSection";
import ResultsBanner from "../ResultsBanner/ResultsBanner";
import { IProjectContent } from "types";

interface ProjectLayoutProps {
  label: string;
  content: IProjectContent;
  classes?: string;
}

export default async function ProjectLayout2({
  label,
  content,
  classes,
}: ProjectLayoutProps) {
  return (
    <article className={classes}>
      <div className="mx-4 flex flex-col sm:px-10">
        <div className="flex flex-col items-center gap-8 py-8 lg:gap-12 xl:flex-row xl:items-start xl:gap-20 xl:px-12">
          <h2 className="mb-10 max-w-max self-start rounded-xl bg-bg-4 px-4 py-4 text-4xl text-fg-1 lg:px-12 lg:text-5xl xl:hidden">
            {label}
          </h2>
          <aside className="relative aspect-square min-h-[40vh] shadow-2xl sm:min-h-[60vh] lg:block lg:min-h-[70vh] lg:w-[50vw] xl:w-[40vw]">
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
            <h2 className="mb-10 hidden max-w-max rounded-xl bg-bg-4 px-4 py-4 text-4xl text-fg-1 lg:px-12 lg:text-5xl xl:block">
              {label}
            </h2>
            <p className="text-xl md:text-2xl">{content.description}</p>
          </div>
        </div>
      </div>
      {content.social_media_section ? (
        <SocialMediaSection
          content={content.social_media_section}
          classes="flex min-h-[30vh] flex-col py-8 items-center"
        />
      ) : null}
      {content.results ? (
        <ResultsBanner
          results={content.results}
          classes="bg-bg-2-transparent text-fg-2"
        />
      ) : null}
    </article>
  );
}
