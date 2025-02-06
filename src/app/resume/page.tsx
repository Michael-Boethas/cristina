import PreviewPDF from "components/PreviewPDF/PreviewPDF";
import CareerTimeline from "components/CareerTimeline/CareerTimeline";
import content from "../../content/resume-content.json" assert { type: "json" };

export default function Resume(): React.JSX.Element {
  return (
    <main className="min-h-screen pt-16 sm:px-8 lg:px-10 lg:pt-36 xl:px-16 flex flex-col">
      <h2 className="text-4xl lg:text-5xl no-italic px-4 lg:px-16 py-8">
        {content.title}
      </h2>
      <div className="flex ps-10">
        <CareerTimeline classes="w-full xl:w-1/2 flex flex-col items-left md:p-6" />
        <PreviewPDF
          classes="hidden md:block w-[820px] h-[80vh] md:translate-y-[-50px]"
          pdf="CV.pdf"
        />
      </div>
    </main>
  );
}
