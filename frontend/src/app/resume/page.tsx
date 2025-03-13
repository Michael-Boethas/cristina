"use client";

import Link from "next/link";
import PreviewPDF from "components/PreviewPDF/PreviewPDF";
import CareerTimeline from "components/CareerTimeline/CareerTimeline";
import { useFetch } from "hooks/useFetch";
import { IResumePageData } from "types";
import fallbackData from "../../content/resume-page.json" assert { type: "json" };

export default function Resume(): React.JSX.Element {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/resume`;
  const { data, loading } = useFetch<IResumePageData>(url);
  const content = data ?? fallbackData;
  return (
    <main className="flex min-h-screen flex-col pt-20 sm:px-8 lg:px-10 lg:pt-36 xl:px-16">
      <h2 className="no-italic px-4 py-8 text-4xl lg:px-16 lg:text-5xl">
        {content.title}
      </h2>

      <div className="flex">
        <div className="flex w-full flex-col items-center text-xl md:p-6 lg:items-start xl:w-1/2">
          {loading ? (
            "Loading..."
          ) : (
            <>
              <CareerTimeline classes="ps-10" />

              <Link
                href={content.pdf_url}
                target="_blank"
                rel="noopener"
                className="hover-bg-1 m-12 max-w-max self-center rounded-xl bg-bg-2 p-4 py-6 text-lg text-fg-2 sm:text-xl"
              >
                {content.CTA}
              </Link>
            </>
          )}
        </div>

        <PreviewPDF
          classes="hidden lg:block w-[820px] bg-blue-400 h-[90vh] md:translate-y-[-50px]"
          pdf={content.pdf_url}
        />
      </div>
    </main>
  );
}
