import Link from "next/link";
import { notFound } from "next/navigation";
import Layout1 from "components/ProjectLayouts/ProjectLayout1/ProjectLayout1";
import Layout2 from "components/ProjectLayouts/ProjectLayout2/ProjectLayout2";
import Layout3 from "components/ProjectLayouts/ProjectLayout3/ProjectLayout3";
import Layout4 from "components/ProjectLayouts/ProjectLayout4/ProjectLayout4";
import { fetchStrapi } from "utils/utils";
import { IPortfolioItem } from "types";
import fallbackData from "../../../content/portfolio-page.json";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// Generate dynamic routes data at build time
export async function generateStaticParams() {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/portfolio`;
  const response = await fetchStrapi(url);
  const projects: IPortfolioItem[] =
    response?.projects ?? fallbackData.projects;

  return projects.map((project) => ({
    slug: project.slug, // Generate slugs
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  // Next.js expects `params` to be treated asynchronously, even though it's already resolved.
  // Using `await Promise.resolve(params)` to satisfy this requirement.
  const { slug } = await Promise.resolve(params);
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/portfolio?populate[projects][populate][project_content]=true`;
  const response = await fetchStrapi(url);
  const projects = response?.projects ?? fallbackData.projects;
  const entry = projects.find((item: IPortfolioItem) => item.slug === slug);

  if (!projects) {
    return notFound();
  }

  const renderLayout = () => {
    switch (entry?.project_content?.layout) {
      case 1:
        return <Layout1 label={entry.label} content={entry.project_content} />;
      case 2:
        return <Layout2 label={entry.label} content={entry.project_content} />;
      case 3:
        return <Layout3 label={entry.label} content={entry.project_content} />;
      case 4:
        return <Layout4 label={entry.label} content={entry.project_content} />;
      default:
        return null;
    }
  };

  return (
    <main className="relative flex min-h-screen flex-col pt-28 lg:pt-36">
      {renderLayout()}

      <Link
        href={"/portfolio"}
        role="button"
        className="absolute bottom-0 m-6 max-w-max content-center self-center rounded-xl bg-[#0007] p-3 text-xl text-fg-2 hover:bg-[#000b] md:self-end xl:fixed"
        aria-label="Go back to portfolio gallery"
      >
        Go back to my portfolio
      </Link>
    </main>
  );
}
