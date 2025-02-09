import AboutDecoration from "../../components/AboutDecoration/AboutDecoration";
import content from "../../content/about-content.json" assert { type: "json" };

export default function About(): React.JSX.Element {
  return (
    <main className="flex gap-6 pt-16 lg:pt-32">
      <AboutDecoration />
      <section
        className="flex flex-col items-stretch p-5 text-lg md:px-16 md:text-2xl lg:w-3/5 xl:w-4/5"
        aria-label="Section describing Cristina Jiménez"
      >
        <h2 className="py-8 text-4xl italic md:text-5xl">{content.title}</h2>
        <em className="text-xl md:text-3xl">{content.introduction}</em>
        <p className="py-2">{content["paragraph-1"]}</p>
        <p className="py-2">{content["paragraph-2"]}</p>
        <p className="py-2">{content["paragraph-3"]}</p>
        <p className="py-2">{content["paragraph-4"]}</p>
      </section>
    </main>
  );
}
