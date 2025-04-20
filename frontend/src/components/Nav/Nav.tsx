'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export interface INavProps {
  classes: string;
}

export default function Nav({ classes }: INavProps): React.JSX.Element {
  const pathname = usePathname();

  return (
    <nav className={classes}>
      <Link
        href="/home"
        className={`${pathname === '/home' ? 'border-b-4 border-b-bg-1' : ''}`}
        aria-label="Navigate to Home page"
      >
        <span>Home</span>
      </Link>
      <Link
        href="/about"
        className={`${pathname === '/about' ? 'border-b-4 border-b-bg-1' : ''}`}
        aria-label="Navigate to About page"
      >
        <span>About</span>
      </Link>
      <Link
        href="/portfolio"
        className={`${pathname.startsWith('/portfolio') ? 'border-b-4 border-b-bg-1' : ''}`}
        aria-label="Navigate to Portfolio"
      >
        <span>Portfolio</span>
      </Link>
      <Link
        href="/resume"
        className={`${pathname === '/resume' ? 'border-b-4 border-b-bg-1' : ''}`}
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
        <i className="fa-brands fa-linkedin-in rounded-lg bg-bg-1 px-3 py-2 text-2xl" />
      </Link>
    </nav>
  );
}
