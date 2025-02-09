"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IndustryContent, CompanyDetail } from "../../types";

interface IndustryProps {
  entry: IndustryContent;
}

export default function Industry({ entry }: IndustryProps): React.JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleContent = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="w-[80vw] xs:w-[70vw] sm:w-[33vw] md:w-64 flex flex-col items-center">
      {/* Button to open modal */}
      <button
        className="relative aspect-square w-full bg-bg-2 border border-[2px] border-bg-2 rounded-[32px]"
        onClick={toggleContent}
        aria-label={`Show content for ${entry.label}`}
      >
        <Image
          src={entry.image}
          alt={`Image representing ${entry.label}`}
          fill
          sizes="(max-width: 768px) 500px, (max-width: 1200px) 400px"
          className="object-cover rounded-[30px]"
        />
        <div className="industry__overlay rounded-[30px]">
          <h3 className="text-white text-3xl">{entry.label}</h3>
        </div>
      </button>

      {/* Modal window */}
      {!isCollapsed && (
        <div className="backdrop" onClick={toggleContent}>
          <div
            className="industry__content"
            onClick={(event) => event.stopPropagation()} // Prevent closing modal when clicking inside
          >
            {/* Modal header */}
            <div className="flex justify-between items-start">
              <h3 className="sm:opacity-1 text-3xl sm:text-4xl ps-3">
                {entry.label}
              </h3>
              <button aria-label="Close button" onClick={toggleContent}>
                <i className="hover-fg-1 text-2xl fa-solid fa-xmark" />
              </button>
            </div>

            {/* Companies List */}
            <div className="p-3 py-6">
              {/* Iteration over companies */}
              {entry.textContent.map(
                (company: CompanyDetail, index: number) => (
                  <div key={index} className="mb-4">
                    <Link
                      href={company.url}
                      target="_blank"
                      rel="noopener"
                      aria-label={`Visit ${company.name}'s website`}
                      className="hover-fg-1 font-semibold text-xl sm:text-2xl"
                    >
                      {company.name}
                    </Link>
                    <p className="sm:text-xl">{company.text}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
