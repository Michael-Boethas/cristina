"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Nav from "../Nav/Nav";

export default function Header(): React.JSX.Element {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <header className="fixed w-full flex justify-between bg-bg-3-transparent pt-5 md:px-6 lg:px-24 md:gap-20 lg:gap-28">
      <div className="flex flex-col gap-2 px-6 lg:px-1">
        <h1 className="text-3xl">Cristina Jiménez</h1>
        {pathname === "/home" ? (
          <span className="text-sm md:text-lg">
            From the Dominican Republic, based in Paris.
          </span>
        ) : null}
      </div>
      <div className={`flex flex-col gap-2`}>
        <i
          className={`fa-solid fa-bars fa-2xl p-6 md:hidden`}
          style={{ color: "#3d3846" }}
          onClick={toggleCollapse}
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        ></i>

        <div
          className={`absolute md:static ${isCollapsed ? "hidden md:block" : "flex flex-col absolute top-full right-0 w-screen xs:w-1/2 sm:w-1/3 md:w-auto items-center bg-bg-3-transparent pt-4 md:pt-0 slide-left nav-links--animation md:animate-none"}`}
          onClick={toggleCollapse}
        >
          <Nav />
          <Link
            href="https://www.linkedin.com/in/cristina-jim%C3%A9nez-b84a0b127/"
            className="flex justify-center"
          >
            <i
              className={`${pathname === "/home" ? "fa-brands fa-linkedin-in text-2xl bg-bg-1 flex justify-end px-3 py-2 m-6 md:absolute md:top-18 md:right-10 md:m-0" : "hidden"}`}
            ></i>
          </Link>
        </div>
      </div>
    </header>
  );
}
