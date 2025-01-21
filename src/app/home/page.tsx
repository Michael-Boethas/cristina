import Link from "next/link";

export default function Home(): React.JSX.Element {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="pt-36 px-8 md:px-24 pb-5">
        <p className=" text-xl sm:text-2xl lg:text-3xl lg:w-2/3 xl:w-1/2">
          Hello, I am Cristina – <br /> a communications and international
          marketing specialist who enjoys producing content that drives real
          value for ambitious B2B and B2C companies.
        </p>
        <div className="flex flex-col items-center text-fg-2 text-center pt-8 md:w-full md:items-start gap-6 text-lg md:text-2xl md:w-1/3 lg:w-2/3 xl:flex-row xl:w-1/2 2xl:w-1/3">
          <Link
            href="/portfolio"
            className="xs:w-2/3 sm:w-1/2 bg-bg-2 p-2 self-stretch rounded-xl content-center"
          >
            Checkout my portfolio
          </Link>
          <Link
            href="/resume "
            className="xs:w-2/3 sm:w-1/2 bg-bg-2 p-2 self-stretch rounded-xl content-center"
          >
            See my Resume
          </Link>
        </div>
      </section>
      <section className="flex-grow flex flex-col items-center px-24 bg-bg-4">
        <h2 className="text-4xl md:text-5xl no-italic py-8">My expertise</h2>
      </section>
    </div>
  );
}
