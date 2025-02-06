import AboutDecoration from "../../components/AboutDecoration/AboutDecoration";
import content from "../../content/about-content.json" assert { type: "json" };

export default function About(): React.JSX.Element {
  return (
    <main className="flex gap-6 pt-16 lg:pt-32">
      <AboutDecoration />
      <section
        className="lg:w-3/5 xl:w-4/5 text-lg md:text-xl p-5 md:p-20"
        aria-label="Section describing Cristina Jiménez"
      >
        <h2 className="text-4xl md:text-5xl italic py-8">{content.title}</h2>
        <em className="text-xl md:text-2xl py-8">{content.introduction}</em>
        <p className="py-2">{content["paragraph-1"]}</p>
        <p className="py-2">{content["paragraph-2"]}</p>
        <p className="py-2">{content["paragraph-3"]}</p>
        <p className="py-2">{content["paragraph-4"]}</p>
      </section>
    </main>
  );
}
