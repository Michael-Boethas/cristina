"use client";

import { useState } from "react";
import Image from "next/image";
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
    <div className={`sm:w-1/3 md:w-64 flex flex-col items-center`}>
      <button
        className="relative aspect-square w-4/5 xs:w-3/5 sm:w-full border border-4 border-bg-2"
        onClick={toggleContent}
        aria-label="expand"
      >
        <Image
          src={entry.image}
          alt={`Icon representing ${entry.label}`}
          fill
          className="object-cover"
        />
        <div className="industry__overlay">
          <h3 className="text-white text-3xl">{entry.label}</h3>
        </div>
      </button>
      <p
        className={`px-8 xs:px-16 sm:p-0 text-xl pt-4 ${isCollapsed ? "text--collapsed" : "text--expanded"}`}
      >
        <span className="font-medium">
          {renderWithLineBreaks(entry.text ).slice(0, 1)}
        </span>
        {renderWithLineBreaks(entry.text).slice(1)}
      </p>
    </div>
  );
}
