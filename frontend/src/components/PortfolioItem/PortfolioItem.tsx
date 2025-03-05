import Image from "next/image";
import Link from "next/link";
import { IPortfolioItem } from "types";

interface PortfolioItemProps {
  entry: IPortfolioItem;
}

export default function PortfolioItem({
  entry,
}: PortfolioItemProps): React.JSX.Element {
  return (
    <figure className="relative rounded-[15%]">
      <Link href={`/portfolio/${entry.slug}`} className="rounded-[15%]">
        <Image
          src={entry.thumbnail_url}
          alt={entry.label}
          width={250}
          height={250}
          className="aspect-square h-full w-full rounded-[15%] object-cover"
        />
      </Link>
      <figcaption className="absolute left-0 top-0 z-10 flex h-full w-full items-center rounded-[15%] bg-black bg-opacity-70 p-4 text-center text-3xl font-semibold text-fg-2">
        {entry.label}
      </figcaption>
    </figure>
  );
}
