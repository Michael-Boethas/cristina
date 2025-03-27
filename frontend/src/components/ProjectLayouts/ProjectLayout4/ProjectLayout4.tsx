import SocialMediaSection from "components/SocialMediaSection/SocialMediaSection";
import ResultsBanner from "../ResultsBanner/ResultsBanner";
import { IProjectContent } from "types";
import ArticleItem from "components/ArticleItem/ArticleItem";

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
      <div className="mx-4 flex flex-col sm:px-10 lg:px-12 xl:px-16">
        <h2 className="mb-10 max-w-max rounded-xl bg-bg-4 px-4 py-4 text-4xl text-fg-1 lg:px-12 lg:text-5xl">
          {label}
        </h2>
        <p className="text-xl md:text-2xl">{content.description}</p>

        {/* Social Media section */}

        {content.social_media_section ? (
          <SocialMediaSection
            content={content.social_media_section}
            classes="flex min-h-[30vh] flex-col py-8"
          />
        ) : null}
      </div>
      {content.results ? (
        <ResultsBanner results={content.results} classes="bg-bg-4 text-fg-1" />
      ) : null}
      {/* content.articles is always at least an empty array */}
      {content.articles && content.articles.length > 0 ? (
        <div className="flex flex-col items-center justify-center gap-12 p-20 pb-28 md:flex-row md:flex-wrap md:items-baseline">
          {content.articles?.map((item, index) => {
            return <ArticleItem key={index} entry={item} />;
          })}
        </div>
      ) : null}
    </article>
  );
}
