import Image from "next/image";
import Link from "next/link";
import { IArticleItem } from "types";

interface IArticlesItemProps {
  entry: IArticleItem;
  classes?: string;
}

export default function ArticlesItem({
  entry,
  classes,
}: IArticlesItemProps): React.JSX.Element {
  return (
    <Link
      href={entry.link}
      target="_blank"
      className={`${classes} flex flex-col`}
    >
      <div className="relative aspect-[4/3]">
        <Image
          src={entry.thumbnail_url}
          alt={`Thumbnail of ${entry.title}`}
          fill
          sizes="90vw"
        />
        <div
          className={`${entry.preview_text === null ? "relative top-0 hidden h-full w-full items-center justify-center text-2xl font-semibold text-[#0000] hover:bg-[#000b] hover:text-fg-2 lg:flex" : "hidden"}`}
        >
          View More
        </div>
      </div>

      <div className="flex h-full flex-grow flex-col justify-between gap-4 p-2">
        <div className="flex flex-col gap-4">
          <h4
            className={`${entry.preview_text ? "font--barlow text-2xl lg:text-3xl" : "font--montserrat hover-text-1 text-xl font-medium lg:text-2xl"}`}
          >
            {entry.title}
          </h4>
          {/* For press releases only */}
          {entry.preview_text && (
            <p className="gradient-text line-clamp-5 text-lg">{`${entry.preview_text}`}</p>
          )}
        </div>
        {entry.preview_text && (
          <span className="hover-text-1 block text-xl font-semibold lg:text-2xl">
            Read News
          </span>
        )}
      </div>
    </Link>
  );
}
