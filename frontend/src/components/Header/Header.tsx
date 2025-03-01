"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Nav from "../Nav/Nav";
import { useFetch } from "hooks/useFetch";
import { IHeaderData } from "types";
import fallbackData from "../../content/header.json" assert { type: "json" }; // Fallback

export default function Header(): React.JSX.Element {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/header`;
  const { data } = useFetch<IHeaderData>(url);
  const content = data ?? fallbackData;

  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <header className="fixed z-50 flex w-full justify-between bg-bg-3-transparent pb-2 pt-5 md:gap-12 md:px-6 lg:gap-28 lg:ps-24">
      <div className="flex flex-col gap-2 px-6 lg:px-1">
        <h1 className="text-4xl">{content?.title}</h1>

        {pathname === "/home" ? (
          <span className="text-md md:text-xl">
            {`${content?.tagline} ${content?.location}`}
          </span>
        ) : null}
      </div>

      <div className={`flex flex-col gap-2`}>
        {/* Responsive burger Menu and Nav Component */}
        <i
          className={`fa-solid fa-bars fa-2xl p-6 md:hidden`}
          style={{ color: "#3d3846" }}
          onClick={toggleCollapse}
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        />

        <div
          className={`absolute right-0 top-full flex w-full flex-col items-center bg-bg-3-transparent py-4 xs:w-1/2 sm:w-1/3 md:static md:w-auto md:bg-transparent md:pt-0 ${isCollapsed ? "nav-slide-out" : "nav-slide-in"}`}
          onClick={toggleCollapse}
        >
          <Nav classes="flex flex-col md:flex-row gap-4 lg:gap-6 xl:gap-16 text-3xl" />
        </div>
      </div>
    </header>
  );
}
