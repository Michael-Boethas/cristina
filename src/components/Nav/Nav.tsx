"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav(): React.JSX.Element {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col md:flex-row gap-6 lg:gap-16 text-3xl">
      <Link
        href="/home"
        className={`${pathname === "/home" ? "border-b-bg-1 border-b-4" : ""}`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`${pathname === "/about" ? "border-b-bg-1 border-b-4" : ""}`}
      >
        About
      </Link>
      <Link
        href="/portfolio"
        className={`${pathname === "/portfolio" ? "border-b-bg-1 border-b-4" : ""}`}
      >
        Portfolio
      </Link>
      <Link
        href="/resume"
        className={`${pathname === "/resume" ? "border-b-bg-1 border-b-4" : ""}`}
      >
        Resume
      </Link>
    </nav>
  );
}
