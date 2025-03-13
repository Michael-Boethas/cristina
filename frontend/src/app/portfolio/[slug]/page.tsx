import Link from "next/link";
import { notFound } from "next/navigation";
import Layout1 from "components/ProjectLayouts/ProjectLayout1/ProjectLayout1";
import Layout2 from "components/ProjectLayouts/ProjectLayout2/ProjectLayout2";
import Layout3 from "components/ProjectLayouts/ProjectLayout3/ProjectLayout3";
import Layout4 from "components/ProjectLayouts/ProjectLayout4/ProjectLayout4";
import fallbackData from "../../../content/portfolio-page.json";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  // Next.js expects `params` to be treated asynchronously, even though it's already resolved.
  // Using `await Promise.resolve(params)` ensures compliance with this requirement.
  const { slug } = await Promise.resolve(params);
  const content = fallbackData;
  const portfolioItem = content.projects.find(
    (project) => project.slug === slug,
  );

  if (!portfolioItem) {
    return notFound();
  }

  const renderLayout = () => {
    switch (portfolioItem.layout) {
      case 1:
        return <Layout1 projectId={slug} />;
      case 2:
        return <Layout2 projectId={slug} />;
      case 3:
        return <Layout3 projectId={slug} />;
      case 4:
        return <Layout4 projectId={slug} />;
      default:
        return null;
    }
  };

  return (
    <main className="flex min-h-screen flex-col pt-28 lg:pt-36">
      {renderLayout()}

      <Link
        href={"/portfolio"}
        className="hover-bg-1 m-6 max-w-max content-center self-center rounded-xl bg-bg-2 p-3 text-xl text-fg-2 md:self-end"
        aria-label="Go back to portfolio gallery"
      >
        Go back to portfolio
      </Link>
    </main>
  );
}
