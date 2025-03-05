import { notFound } from "next/navigation";

interface LayoutProps {
  projectId: string;
}

export default async function Layout3({ projectId }: LayoutProps) {
  const project = await import(
    `../../../content/projects/${projectId}.json`
  ).then((m) => m.default);

  if (!project) {
    return notFound();
  }

  return (
    <>
      <h2 className="px-4 py-8 text-4xl lg:px-16 lg:text-5xl">
        {project.label}
      </h2>
      <p className="whitespace-pre-line p-4 text-xl">{project.description}</p>
    </>
  );
}
