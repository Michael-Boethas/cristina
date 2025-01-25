/* eslint-disable @next/next/no-img-element */

"use client";

import { useState } from "react";
import content from "../../content/home-content.json";

interface ExpertiseProps {
  entry: keyof typeof content.expertise;
  classes?: string;
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
      <img
        src={content.expertise[entry].icon}
        alt={`Icon representing ${content.expertise[entry].label}`}
        className="w-20 h-auto xs:w-28 lg:w-auto max-w-36 "
      />
      <h3 className="md:min-h-[80px]">
        {content.expertise[entry].label}
      </h3>
      <button onClick={toggleContent} aria-label="expand">
        <i className="fa-sharp fa-solid fa-plus"></i>
      </button>
      <p
        className={`md:max-w-sm text-[80%] ${isCollapsed ? "text--collapsed" : "text--expanded"}`}
      >
        {content.expertise[entry].text}
      </p>
    </div>
  );
}
