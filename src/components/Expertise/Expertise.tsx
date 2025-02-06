"use client";

import { useState } from "react";
import Image from "next/image";
import { ExpertiseContent } from "../../types";

interface ExpertiseProps {
  entry: ExpertiseContent;
}

export default function Expertise({
  entry,
}: ExpertiseProps): React.JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleContent = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`max-w-md flex flex-col flex-grow items-center text-center gap-4 p-6 m-2 ${isCollapsed ? "" : "bg-bg-5 shadow-2xl"}`}
    >
      <Image
        src={entry.icon}
        alt={`Icon representing ${entry.label}`}
        width={400}
        height={400}
        unoptimized
        className="w-20 h-auto xs:w-28 lg:w-auto max-w-36"
      />
      <h3 className="md:min-h-[80px]">{entry.label}</h3>
      <button
        onClick={toggleContent}
        aria-label={isCollapsed ? "Expand content" : "Collapse content"}
      >
        <i className="hover-pop fa-sharp fa-solid fa-plus"></i>
      </button>
      <p
        className={`md:max-w-sm text-[80%] ${isCollapsed ? "text--collapsed" : "text--expanded"}`}
      >
        {entry.text}
      </p>
    </div>
  );
}
