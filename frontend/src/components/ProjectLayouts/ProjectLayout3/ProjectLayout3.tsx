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
      <div className="mx-4 flex flex-col sm:px-10 lg:px-12 xl:px-28">
        <h2 className="mb-10 max-w-max rounded-xl bg-bg-1 px-4 py-4 text-4xl text-fg-2 lg:px-12 lg:text-5xl">
          {label}
        </h2>
        <p className="text-xl md:text-2xl">{content.description}</p>
      </div>
      {content.results ? (
        <ResultsBanner results={content.results} classes="bg-bg-1 text-fg-2" />
      ) : null}
    </article>
  );
}
