import Link from "next/link";
import { notFound } from "next/navigation";
import LayoutV from "components/ProjectLayouts/ProjectLayoutV/ProjectLayoutV";
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

  // Base URL
  const baseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/portfolio`;

  // Population parameters
  const populateProjects = "populate[projects][populate][project_content]";
  const populateResults = `${populateProjects}[populate][results]`;
  const populateCarousel = `${populateProjects}[populate][carousel]`;
  const populateArticles = `${populateProjects}[populate][articles]`;
  const populateSocialMediaLinks = `${populateProjects}[populate][social_media_section][populate][links]`;
  const populateSocialMediaEmbed = `${populateProjects}[populate][social_media_section][populate][embed]`;

  // Combining the query parameters
  const queryParams = [
    `${populateResults}=*`,
    `${populateCarousel}=*`,
    `${populateArticles}=*`,
    `${populateSocialMediaLinks}=*`,
    `${populateSocialMediaEmbed}=*`, // Separate the links and embed into distinct parameters
  ].join("&");

  // Final query URL
  const url = `${baseUrl}?${queryParams}`;

  // const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/portfolio?populate[projects][populate][project_content][populate][results]=*&populate[projects][populate][project_content][populate][carousel]=*&populate[projects][populate][project_content][populate][articles]=*&populate[projects][populate][project_content][populate][social_media_section][populate][links]=*&populate[projects][populate][project_content][populate][social_media_section][populate][embed]=*`;

  const response = await fetchStrapi(url);
  const projects = response?.projects ?? fallbackData.projects;
  const entry = projects.find((item: IPortfolioItem) => item.slug === slug);

  if (!entry) {
    return notFound(); // 404 if no matching project
  }

  const backButtonColour = "bg-[#222b] hover:bg-[#111c]";
  const renderLayout = () => {
    switch (entry?.project_content?.layout) {
      case 1:
        return <LayoutV label={entry.label} content={entry.project_content} />;
      case 2:
        return <LayoutV label={entry.label} content={entry.project_content} />;
      case 3:
        return <LayoutV label={entry.label} content={entry.project_content} />;
      case 4:
        return <LayoutV label={entry.label} content={entry.project_content} />;
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
        className={`${backButtonColour} absolute bottom-0 m-6 max-w-max content-center self-center rounded-xl p-3 text-xl font-semibold text-fg-2 shadow-xl md:self-end lg:p-5 xl:fixed`}
        aria-label="Go back to portfolio gallery"
      >
        Back to my portfolio
      </Link>
    </main>
  );
}
