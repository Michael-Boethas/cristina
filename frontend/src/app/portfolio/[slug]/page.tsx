import { notFound } from "next/navigation";
import { fetchStrapi } from "utils/utils";
import ProjectLayout from "components/ProjectLayout/ProjectLayout";
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

  // Base URL
  const baseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/portfolio`;

  // Population parameters
  const populateProjects = "populate[projects][populate][project_content]";
  const populateResults = `${populateProjects}[populate][results]`;
  const populateGallery = `${populateProjects}[populate][gallery]`;
  const populateArticles = `${populateProjects}[populate][articles]`;
  const populateSocialMediaLinks = `${populateProjects}[populate][social_media_section][populate][links]`;
  const populateSocialMediaEmbed = `${populateProjects}[populate][social_media_section][populate][embed]`;

  // Combining the query parameters
  const queryParams = [
    `${populateResults}=*`,
    `${populateGallery}=*`,
    `${populateArticles}=*`,
    `${populateSocialMediaLinks}=*`,
    `${populateSocialMediaEmbed}=*`,
  ].join("&");

  // Final query URL
  const url = `${baseUrl}?${queryParams}`;

  const response = await fetchStrapi(url);
  const projects = response?.projects ?? fallbackData.projects;
  const entry = projects.find((item: IPortfolioItem) => item.slug === slug);

  if (!entry) {
    return notFound(); // 404 if no matching project
  }

  return (
    <main className="relative flex min-h-screen flex-col pt-28 lg:pt-36">
      <ProjectLayout
        label={entry.label}
        content={entry.project_content}
      ></ProjectLayout>
    </main>
  );
}
