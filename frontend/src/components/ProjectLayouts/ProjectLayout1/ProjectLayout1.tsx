import ResultsBanner from "../ResultsBanner/ResultsBanner";
import { IProjectData } from "types";

interface ProjectLayoutProps {
  projectId: string;
  classes?: string;
}

export default async function ProjectLayout1({
  projectId,
  classes,
}: ProjectLayoutProps) {
  // const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/Projects/`;
  const data = null;
  // const { data } = useFetch<IProjectData>(url);
  const project: IProjectData =
    data ??
    (await import(`../../../content/projects/${projectId}.json`).then(
      (m) => m.default,
    )); // import() returns a module, the actual JSON is wrapped in m.default

  return (
    <article className={classes}>
      <div className="mx-4 flex flex-col sm:px-10 lg:px-12 xl:px-28">
        <h2 className="mb-10 max-w-max rounded-xl bg-bg-1 px-4 py-4 text-4xl text-fg-2 lg:px-12 lg:text-5xl">
          {project.label}
        </h2>
        <p className="text-xl md:text-2xl">{project.content.description}</p>
        <iframe
          key={project.content.video_url}
          src={project.content.video_url}
          className="mx-6 my-16 aspect-video min-h-[250px] max-w-full self-center border-2 border-bg-1 sm:min-h-[400px] md:w-3/4"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        ></iframe>
      </div>
      {project.content.results ? (
        <ResultsBanner
          results={project.content.results}
          classes="bg-bg-1 text-fg-2"
        />
      ) : null}
    </article>
  );
}
