/* eslint-disable @next/next/no-img-element */

"use client";

import { useState } from "react";
import Image from "next/image";
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
      className={`flex flex-col gap-6 items-center p-6`}
    >
      <button
        className="relative w-52 h-52"
        onClick={toggleContent}
        aria-label="expand"
      >
        <Image
          src={entry.image}
          alt={`Icon representing ${entry.label}`}
          fill
          className="object-cover rounded-xl"
        />
        <h3 className="md:min-h-[80px]">{entry.label}</h3>{" "}
      </button>
      <p
        className={`md:max-w-sm text-[80%] ${isCollapsed ? "text--collapsed" : "text--expanded"}`}
      >
        {entry.text}
      </p>
    </div>
  );
}
