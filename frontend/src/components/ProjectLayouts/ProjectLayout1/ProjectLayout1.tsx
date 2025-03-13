import ResultsBanner from "../ResultsBanner/ResultsBanner";
import { IProjectContent } from "types";

interface ProjectLayout1Props {
  projectId: string;
  classes?: string;
}

export default async function ProjectLayout1({
  projectId,
  classes,
}: ProjectLayout1Props) {
  const project = await import(
    `../../../content/projects/${projectId}.json`
  ).then((m) => m.default); // import() returns a module, the actual JSON is wrapped in m.default

  return (
    <article className={classes}>
      <div className="mx-4 flex flex-col sm:px-10 lg:px-12 xl:px-28">
        <h2 className="mb-10 max-w-max rounded-xl bg-bg-1 px-4 py-4 text-4xl text-fg-2 lg:px-12 lg:text-5xl">
          {project.label}
        </h2>
        <p className="whitespace-pre-line text-xl md:text-2xl">
          {project.description}
        </p>
        {project?.content.map((element: IProjectContent) => (
          <iframe
            key={element.url}
            src={element.url}
            className="mx-6 my-16 aspect-video min-h-[250px] max-w-full self-center border-2 border-bg-1 sm:min-h-[400px] md:w-3/4"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
        ))}
      </div>
      <ResultsBanner results={project.results} classes="bg-bg-1 text-fg-2" />
    </article>
  );
}
