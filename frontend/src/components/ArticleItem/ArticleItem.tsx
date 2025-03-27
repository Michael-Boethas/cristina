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
    <div className={`${classes}`}>
      <Link href={entry.link} target="_blank">
        <div className="relative aspect-[4/3] w-[90vw] sm:w-[45vw] lg:w-[25vw]">
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

        <h4
          className={`${entry.preview_text ? "font--barlow" : "font--montserrat hover-text-1"} w-[90vw] p-2 text-2xl sm:w-[45vw] lg:w-[25vw] lg:text-3xl`}
        >
          {entry.title}
        </h4>

        {entry.preview_text ? (
          <div>
            <p>{entry.preview_text}</p>
            <span className="hover-bg-1 underline">Read News</span>
          </div>
        ) : null}
      </Link>
    </div>
  );
}
