import content from "../../content/resume-content.json";

export default function Resume(): React.JSX.Element {
  return (
    <main className="pt-32 flex flex-col lg:flex-row">
      <aside className="lg:w-1/2">
        <h2 className="text-5xl lg:text-6xl no-italic px-4 md:px-24 py-8">
          {content.title}
        </h2>
      </aside>
      <div className="w-full sm:w-1/2 h-screen">
        <iframe
          src="/CV.pdf#toolbar=0&navpanes=0&scrollbar=0"
          className="w-full h-full object-contain aspect-[8.5/11]"
          title="PDF Viewer"
        />
      </div>
    </main>
  );
}
