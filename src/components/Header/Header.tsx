"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Nav from "../Nav/Nav";

export default function Header(): React.JSX.Element {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <header
      className="fixed z-50 w-full flex justify-between bg-bg-3-transparent
                       pt-5 pb-2 md:px-6 lg:ps-24 md:gap-12 lg:gap-28"
    >
      <div className="flex flex-col gap-2 px-6 lg:px-1">
        <h1 className="text-3xl">Cristina Jiménez</h1>

        {pathname === "/home" ? (
          <span className="text-sm md:text-lg">
            From the Dominican Republic, based in Paris.
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
          className={`absolute md:static top-full right-0 flex flex-col w-full 
                      xs:w-1/2 sm:w-1/3 md:w-auto items-center bg-bg-3-transparent 
                      md:bg-transparent py-4 md:pt-0
                      ${isCollapsed ? "nav-slide-out" : "nav-slide-in"}`}
          onClick={toggleCollapse}
        >
          <Nav classes="flex flex-col md:flex-row gap-4 lg:gap-6 xl:gap-16 text-3xl" />
        </div>
      </div>
    </header>
  );
}
