import Link from 'next/link';
import Image from 'next/image';
import ExpertiseSection from 'components/ExpertiseSection/ExpertiseSection';
import IndustriesSection from 'components/IndustriesSection/IndustriesSection';
import ContactForm from 'components/ContactForm/ContactForm';
import { fetchStrapi } from 'utils/utils';
import { IHomePageData } from 'types';
import fallbackData from '../../content/home-page.json' assert { type: 'json' };

/**
 * Home Page Component, renders the homepage, including an introduction, expertise section,
 * industries section, contact form, and footer. It fetches data from Strapi.
 */
export default async function Home(): Promise<React.JSX.Element> {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/home`;
  const content: IHomePageData = (await fetchStrapi(url)) ?? fallbackData;
  return (
    <main className="max-w-screen flex min-h-screen flex-col overflow-hidden">
      {/* Introduction */}
      <section
        id="intro-section"
        aria-label="Short introduction of Cristina Jiménez"
        className="intro__content--animation introduction__background relative flex min-h-screen flex-col gap-16 px-4 pb-24 pt-52 md:px-24 xl:justify-end"
      >
        <p className="rounded-xl bg-bg-5-transparent p-6 text-2xl shadow-xl sm:p-12 sm:text-3xl xl:w-1/2">
          {(() => {
            const [boldPart, ...rest] = content.introduction.split('-');
            return (
              <>
                <em className="text-3xl font-medium sm:text-4xl">{boldPart.trim()}</em>
                {rest.length > 0 ? ` -\n ${rest.join('-').trim()}` : ''}
              </>
            );
          })()}
        </p>
        <div className="flex flex-col items-center gap-6 text-center text-lg text-fg-2 md:w-1/3 md:w-full md:items-start md:text-2xl lg:w-2/3 xl:w-1/2 xl:flex-row 2xl:w-1/3">
          <Link
            href="/portfolio"
            role="button"
            aria-label="Check out Cristina Jiménez's portfolio"
            className="hover-bg-1 w-2/3 content-center rounded-xl bg-bg-2 p-3 shadow-xl sm:w-1/2 sm:self-stretch"
          >
            {content.CTA_1}
          </Link>
          <Link
            href="/resume"
            role="button"
            aria-label="View Cristina Jiménez's career"
            className="hover-bg-1 w-2/3 content-center rounded-xl bg-bg-2 p-3 shadow-xl sm:w-1/2 sm:self-stretch"
          >
            {content.CTA_2}
          </Link>
        </div>
        {/* Scroll down button namename*/}
        <div className="absolute bottom-4 right-0 hidden md:block">
          <Link href="#expertise-section" role="button" aria-label="Scroll down">
            <i className="hover-text-1 fa-solid fa-chevron-down p-8 text-5xl text-[--bg-2] xl:text-7xl" />
          </Link>
        </div>
      </section>

      {/* Expertise section */}
      <ExpertiseSection classes="expertise-section__background relative flex min-h-[50vh] flex-col items-center gap-8 bg-bg-4 md:py-24" />

      {/* Industries section */}
      <IndustriesSection classes="industries-section__background relative flex min-h-[50vh] flex-col items-center gap-8 pb-12 sm:px-12 md:py-24" />

      {/* Contact form */}
      <section
        id="contact-form"
        className="relative flex flex-col items-center bg-bg-5 pb-16 md:min-h-screen md:pt-24"
        aria-label="Form to contact Cristina Jiménez"
      >
        <h2 className="no-italic p-8 text-4xl lg:text-5xl">{content.contact_message}</h2>
        <ContactForm />

        {/* Scroll to top button */}
        <div className="absolute bottom-5 right-0 hidden md:block">
          <Link href="#intro-section" role="button" aria-label="Scroll to top">
            <div className="hover-text-1 flex flex-col">
              <i className="fa-solid fa-chevron-up -mb-14 px-8 text-5xl text-[#000a] text-inherit xl:text-7xl" />
              <i className="fa-solid fa-chevron-up px-8 text-5xl text-[#000a] text-inherit xl:text-7xl" />
            </div>
          </Link>
        </div>
      </section>

      {/* Footer / dev credits */}
      <footer className="flex min-h-[120px] w-full justify-center bg-[#545] text-xl font-semibold text-fg-2 md:text-2xl">
        <Link
          href={`${process.env.NEXT_PUBLIC_AUTHOR_CREDIT}`}
          target="_blank"
          className="flex items-center gap-4"
        >
          <span className="hover:text-bg-1">Developed by </span>
          <Image
            src="/favicon.svg"
            alt="Link to the portfolio of professional web developer Michaël Boëthas"
            height={64}
            width={64}
            unoptimized
            className="hover-pop text-sm font-normal"
          />
        </Link>
      </footer>
    </main>
  );
}
