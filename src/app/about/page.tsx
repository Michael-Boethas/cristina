import AboutDecoration from "../../components/AboutDecoration/AboutDecoration";

export default function About(): React.JSX.Element {
  return (
      <div className="flex gap-6 pt-16">
        <AboutDecoration />
        <section className="lg:w-3/5 xl:w-4/5 text-lg md:text-xl p-20">
          <h2 className="text-4xl md:text-5xl italic py-8">
            A little bit about me…
          </h2>
          <em className="text-xl md:text-2xl py-8">
            Hello! I’m Cristina Jiménez, a creative and innovative
            communications specialist based in Paris, France.
          </em>
          <p className="py-2">
            With over 5 years of experience working across the Dominican
            Republic and France, I’ve had the privilege of shaping communication
            strategies, managing social media, driving PR efforts, and crafting
            compelling content for both B2B and B2C audiences on regional and
            global scales.
          </p>
          <p className="py-2">
            In 2021, I fulfilled a lifelong dream by moving to France to pursue
            a master’s in Luxury Brand Management on a scholarship. Now, I’m
            taking my passion for communications even further by pursuing a
            second master’s in International Marketing, aiming to become a
            full-stack communications and marketing professional.
          </p>
          <p className="py-2">
            Beyond work, I’m a self-proclaimed foodie, constantly exploring
            cuisines from around the world on weekends. As a passionate beauty
            enthusiast, I’ve also been refining my makeup skills since 2011,
            teaching myself techniques that continue to evolve.
          </p>
          <p className="py-2">
            I am open to exciting opportunities, whether remote or in-person
            here in France, where I can bring my creativity and expertise to
            innovative projects and dynamic teams.
          </p>
        </section>
      </div>
  );
}
