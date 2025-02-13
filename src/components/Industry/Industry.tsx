"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IIndustryItem, ICompanyItem } from "../../types";

interface IndustryProps {
  entry: IIndustryItem;
}

export default function Industry({ entry }: IndustryProps): React.JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleContent = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex w-[80vw] flex-col items-center xs:w-[70vw] sm:w-[33vw] md:w-72">
      {/* Button to open modal */}
      <button
        className="relative aspect-square w-full rounded-[32px] border border-[2px] border-bg-2 bg-bg-2"
        onClick={toggleContent}
        aria-label={`Show content for ${entry.label}`}
      >
        <Image
          src={entry.image}
          alt={`Image representing ${entry.label}`}
          fill
          sizes="(max-width: 768px) 500px, (max-width: 1200px) 400px"
          className="rounded-[30px] object-cover"
        />
        <div className="industry__overlay rounded-[30px]">
          <h3 className="text-3xl text-white">{entry.label}</h3>
        </div>
      </button>

      {/* Modal window */}
      {!isCollapsed && (
        <div className="backdrop" onClick={toggleContent}>
          <div
            className="industry__content fade-in"
            onClick={(event) => event.stopPropagation()} // Prevent closing modal when clicking inside
          >
            {/* Modal header */}
            <div className="flex items-start justify-between">
              <h3 className="sm:opacity-1 ps-3 text-3xl sm:text-4xl">
                {entry.label}
              </h3>
              <button aria-label="Close button" onClick={toggleContent}>
                <i className="hover-fg-1 fa-solid fa-xmark text-2xl" />
              </button>
            </div>

            {/* Companies List */}
            <div className="p-3 py-6">
              {/* Iteration over companies */}
              {entry.companies.map((company: ICompanyItem, index: number) => (
                <div key={index} className="mb-4">
                  <Link
                    href={company.url}
                    target="_blank"
                    rel="noopener"
                    aria-label={`Visit ${company.name}'s website`}
                    className="hover-fg-1 text-xl font-semibold sm:text-2xl"
                  >
                    {company.name}
                  </Link>
                  <p className="sm:text-xl">{company.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
