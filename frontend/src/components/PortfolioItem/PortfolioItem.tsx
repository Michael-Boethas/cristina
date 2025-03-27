import Image from "next/image";
import Link from "next/link";
import { IPortfolioItem } from "types";

interface PortfolioItemProps {
  entry: IPortfolioItem;
  classes: string;
}

export default function PortfolioItem({
  entry,
  classes,
}: PortfolioItemProps): React.JSX.Element {
  return (
    <figure className={`${classes}`}>
      <Link
        href={`/portfolio/${entry.slug}`}
        className="hover-pop relative block h-full"
      >
        <Image
          src={entry.project_content.thumbnail_url}
          alt={`Thumbnail for ${entry.label}`}
          fill
          sizes="50vw"
          priority
        />
        <figcaption className="absolute left-0 top-0 z-10 flex min-h-full min-w-full items-center justify-center bg-black bg-opacity-55 p-4 text-center font-semibold text-fg-2 hover:bg-opacity-75">
          {entry.label}
        </figcaption>
      </Link>
    </figure>
  );
}
