"use client";

import { JSX } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav(): JSX.Element {
  const pathname = usePathname();
  return (
    <nav className="flex gap-16 text-3xl">
      <Link href="/home" className={`${pathname === '/home' ? 'border-b-' : null}`}>Home</Link>
      <Link href="/about">About</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/resume">Resume</Link>
    </nav>
  );
}
