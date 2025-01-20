"use client";

import { usePathname } from "next/navigation";
import Nav from "../Nav/Nav";

export default function Header(): React.JSX.Element {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-2 px-24 bg-green-300">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl">Cristina Jiménez</h1>
        {pathname === "/home" ? (
          <span>From the Dominican Republic, based in Paris.</span>
        ) : null}
      </div>
      <Nav />
    </header>
  );
}
