import ResultsBanner from "../ResultsBanner/ResultsBanner";
import { IProjectContent } from "types";

interface ProjectLayoutProps {
  label: string;
  content: IProjectContent;
  classes?: string;
}

export default async function ProjectLayout1({
  label,
  content,
  classes,
}: ProjectLayoutProps) {
  return (
    <article className={classes}>
      <div className="mx-4 flex flex-col sm:px-10 lg:px-12 xl:px-28">
        <h2 className="mb-10 max-w-max rounded-xl bg-bg-1-transparent px-4 py-4 text-4xl text-fg-2 lg:px-12 lg:text-5xl">
          {label}
        </h2>
        <p className="text-xl md:text-2xl">{content.description}</p>
        <iframe
          key={content.video_url}
          src={content.video_url}
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          className="mx-6 my-16 aspect-video min-h-[250px] max-w-full self-center border-2 border-bg-1 sm:min-h-[400px] md:w-3/4"
        ></iframe>
      </div>
      {content.results ? (
        <ResultsBanner results={content.results} classes="bg-bg-1 text-fg-2" />
      ) : null}
    </article>
  );
}
