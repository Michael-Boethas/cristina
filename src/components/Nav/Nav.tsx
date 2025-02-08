"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavProps {
  classes: string;
}

export default function Nav({ classes }: NavProps): React.JSX.Element {
  const pathname = usePathname();

  return (
    <nav className={classes}>
      <Link
        href="/home"
        className={`${pathname === "/home" ? "border-b-bg-1 border-b-4" : ""}`}
        aria-label="Navigate to Home page"
      >
        <span>Home</span>
      </Link>
      <Link
        href="/about"
        className={`${pathname === "/about" ? "border-b-bg-1 border-b-4" : ""}`}
        aria-label="Navigate to About page"
      >
        <span>About</span>
      </Link>
      <Link
        href="/portfolio"
        className={`${pathname === "/portfolio" ? "border-b-bg-1 border-b-4" : ""}`}
        aria-label="Navigate to Portfolio"
      >
        <span>Portfolio</span>
      </Link>
      <Link
        href="/resume"
        className={`${pathname === "/resume" ? "border-b-bg-1 border-b-4" : ""}`}
        aria-label="Navigate to Resume"
      >
        <span>Resume</span>
      </Link>

      <Link
        href="https://www.linkedin.com/in/cristina-jim%C3%A9nez-b84a0b127/"
        target="_blank"
        rel="noopener"
        className="flex justify-center"
        aria-label="Redirect to Linkedin profile"
      >
        <i className="fa-brands fa-linkedin-in text-2xl bg-bg-1 rounded-lg px-3 py-2" />
      </Link>
    </nav>
  );
}
