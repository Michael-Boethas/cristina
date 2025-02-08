import Link from "next/link";
import PreviewPDF from "components/PreviewPDF/PreviewPDF";
import CareerTimeline from "components/CareerTimeline/CareerTimeline";
import content from "../../content/resume-content.json" assert { type: "json" };

export default function Resume(): React.JSX.Element {
  return (
    <main className="min-h-screen pt-16 sm:px-8 lg:px-10 lg:pt-36 xl:px-16 flex flex-col">
      <h2 className="text-4xl lg:text-5xl no-italic px-4 lg:px-16 py-8">
        {content.title}
      </h2>
      <div className="flex">
        <div className="w-full xl:w-1/2 flex flex-col items-center lg:items-start md:p-6">
          <CareerTimeline classes="ps-10"/>
          <Link
            href="/CV.pdf"
            target="_blank"
            rel="noopener"
            className="max-w-max self-center hover-bg-1 bg-bg-2 p-4 py-6 m-12 text-fg-2 text-lg sm:text-xl rounded-xl"
          >
            View my resume
          </Link>
        </div>
        <PreviewPDF
          classes="hidden lg:block w-[820px] h-[80vh] md:translate-y-[-50px]"
          pdf="CV.pdf"
        />
      </div>
    </main>
  );
}
