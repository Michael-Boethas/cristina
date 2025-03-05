import ResultsBanner from "../ResultsBanner/ResultsBanner";
import { IProjectContent } from "types";

interface LayoutProps {
  projectId: string;
  classes?: string;
}

export default async function Layout1({ projectId, classes }: LayoutProps) {
  const project = await import(
    `../../../content/projects/${projectId}.json`
  ).then((m) => m.default); // import() returns a module, the actual JSON is wrapped in m.default

  // Picks the highlight colour depending on the main content type
  const highlightColour = () => {
    switch (project.content[0].type) {
      case "youtube":
        return "bg-bg-1 text-fg-2";
      case "linkedin":
        return "bg-bg-2 text-fg-2";
      default:
        return "bg-bg-4 text-fg-1";
    }
  };

  return (
    <article className={classes}>
      <div className="mx-4 flex flex-col sm:px-10 lg:px-12 xl:px-28">
        <h2
          className={`${highlightColour()} mb-10 max-w-max rounded-xl px-4 py-4 text-4xl lg:px-12 lg:text-5xl`}
        >
          {project.label}
        </h2>
        <p className="whitespace-pre-line text-xl md:text-2xl">
          {project.description}
        </p>
        {project?.content.map((element: IProjectContent) => (
          <iframe
            key={element.url}
            src={element.url}
            className="mx-6 my-16 aspect-video min-h-[250px] max-w-full self-center border border-gray-600 sm:min-h-[400px] md:w-3/4"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
        ))}
      </div>
      <ResultsBanner
        results={project.results}
        classes={`${highlightColour()}`}
      />
    </article>
  );
}
