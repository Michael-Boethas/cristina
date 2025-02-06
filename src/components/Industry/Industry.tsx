"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { renderWithLineBreaks } from "utils/utils";
import { IndustryContent } from "../../types";

interface IndustryProps {
  entry: IndustryContent;
}

export default function Industry({ entry }: IndustryProps): React.JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleContent = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`w-[80vw] xs:w-[70vw] sm:w-[33vw] md:w-64 flex flex-col items-center`}
    >
      <button
        className="relative aspect-square w-full bg-bg-2 border border-[5px] border-bg-2 rounded-[35px]"
        onClick={toggleContent}
        aria-label="Show content"
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
      <div // Backdrop
        className={`${isCollapsed ? "hidden" : "backdrop"}`}
        onClick={toggleContent}
      >
        <div // Modal
          className={`${isCollapsed ? "hidden" : "industry__content"}`}
          // Prevent event bubbling from the backdrop
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex justify-between items-start">
            <h3 className="sm:opacity-1 text-3xl sm:text-4xl">{entry.label}</h3>
            <button aria-label="Close button" onClick={toggleContent}>
              <i className="hover-fg-1 text-2xl fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="p-3 py-6 sm:p-">
            <Link
              href={entry.url}
              target="_blank"
              rel="noopener"
              aria-label={`Visit ${entry.label}'s website`}
              className="hover-fg-1 font-semibold"
            >
              <h4 className="text-xl sm:text-2xl">{`${renderWithLineBreaks(entry.text).slice(0, 1)}`}</h4>
            </Link>
            <p className="-mt-5 align-baseline sm:text-xl">
              {renderWithLineBreaks(entry.text).slice(1)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
