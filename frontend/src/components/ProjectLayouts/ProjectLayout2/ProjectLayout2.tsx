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
        <div className="flex py-8 md:gap-8 lg:gap-12 xl:gap-20 xl:px-12">
          <aside className="relative min-h-[70vh] lg:w-[50vw] xl:w-[40vw]">
            <Image
              src={`${content.cover_image}`}
              alt={`Image of ${label}`}
              fill
              priority
              sizes="50vw"
              className="hidden border border-bg-4 lg:block"
            />
            {content.website_url ? (
              <Link
                href={content.website_url}
                target="_blank"
                className="absolute left-0 top-0 h-full w-full"
              />
            ) : null}
          </aside>
          <div className="flex flex-col gap-6 lg:w-[50vw]">
            <h2 className="mb-10 max-w-max rounded-xl bg-bg-4 px-4 py-4 text-4xl text-fg-1 lg:px-12 lg:text-5xl">
              {label}
            </h2>
            <p className="text-xl md:text-2xl">{content.description}</p>
          </div>
        </div>
      </div>
      {content.social_media_section ? (
        <SocialMediaSection
          content={content.social_media_section}
          classes="flex min-h-[30vh] flex-col py-8"
        />
      ) : null}
      {content.results ? (
        <ResultsBanner results={content.results} classes="bg-bg-2 text-fg-2" />
      ) : null}
    </article>
  );
}
