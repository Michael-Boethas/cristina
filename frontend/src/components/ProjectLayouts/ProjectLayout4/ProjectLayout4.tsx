import SocialMediaSection from "components/SocialMediaSection/SocialMediaSection";
import ResultsBanner from "../ResultsBanner/ResultsBanner";
import { IProjectContent } from "types";

interface ProjectLayoutProps {
  label: string;
  content: IProjectContent;
  classes?: string;
}

export default async function ProjectLayout4({
  label,
  content,
  classes,
}: ProjectLayoutProps) {
  return (
    <article className={classes}>
      <h2 className="mb-10 max-w-max rounded-xl bg-bg-4 px-4 py-4 text-4xl text-fg-2 lg:px-12 lg:text-5xl">
        {label}
      </h2>
      <p className="text-xl md:text-2xl">{content.description}</p>
      {content.social_media_section ? (
        <SocialMediaSection
          content={content.social_media_section}
          classes="flex min-h-[30vh] flex-col py-8"
        />
      ) : null}
      {content.results ? (
        <ResultsBanner results={content.results} classes="bg-bg-4 text-fg-1" />
      ) : null}
    </article>
  );
}
