import ArticleItem from "components/ArticleItem/ArticleItem";
import ResultsBanner from "../ResultsBanner/ResultsBanner";
import { IProjectContent } from "types";

interface ProjectLayoutProps {
  label: string;
  content: IProjectContent;
  classes?: string;
}

export default async function ProjectLayout3({
  label,
  content,
  classes,
}: ProjectLayoutProps) {
  return (
    <article className={classes}>
      <div className="mx-4 flex flex-col pb-20 sm:px-10 lg:px-12 xl:px-16">
        <div className="flex flex-col gap-12 py-8">
          <h2 className="max-w-max rounded-xl bg-bg-4-transparent px-12 py-4 text-4xl text-fg-1 lg:text-5xl">
            {label}
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl">
            {content.description}
          </p>
        </div>

        {/* content.articles is always at least an empty array */}
        {content.articles && content.articles.length > 0 ? (
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-stretch sm:justify-between md:px-8">
            {content.articles?.map((item, index) => {
              return (
                <ArticleItem
                  key={index}
                  entry={item}
                  classes="py-8 sm:w-[35vw] lg:w-[25vw]"
                />
              );
            })}
          </div>
        ) : null}
      </div>
      {content.results && content.results.length > 0 ? (
        <ResultsBanner results={content.results} classes="bg-bg-2 text-fg-2" />
      ) : null}
    </article>
  );
}
