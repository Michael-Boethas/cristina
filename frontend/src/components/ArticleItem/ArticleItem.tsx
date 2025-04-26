import Image from 'next/image';
import Link from 'next/link';
import { IArticleItem } from 'types';

export interface IArticlesItemProps {
  entry: IArticleItem;
  classes?: string;
}

/**
 * Component to display a single article item with a thumbnail, title, and preview text.
 *
 * @param {Object} props - The props for the component.
 * @param {IArticleItem} props.entry - The article data object containing title, link, and thumbnail URL.
 * @param {string} [props.classes] - Optional className to apply custom styling to the component.
 * @returns {JSX.Element} The JSX representation of the article item with an image, title, and preview text.
 */
export default function ArticlesItem({ entry, classes }: IArticlesItemProps): React.JSX.Element {
  return (
    <Link href={entry.link} target="_blank" className={`${classes} flex flex-col`}>
      <div className="relative aspect-[4/3] shadow-[0_5px_5px_1px_#0004]">
        <Image src={entry.thumbnail_url} alt={`Thumbnail of ${entry.title}`} fill sizes="90vw" />
        <div
          className={`${entry.preview_text === null ? 'relative top-0 hidden h-full w-full items-center justify-center text-2xl font-semibold text-[#0000] hover:bg-[#000b] hover:text-fg-2 lg:flex' : 'hidden'}`}
        >
          View More
        </div>
      </div>

      <div className="flex h-full flex-grow flex-col justify-between gap-4 p-2">
        <div className="flex flex-col gap-4">
          <h2 className="font--barlow hover-text-1 text-2xl font-medium lg:text-3xl">
            {entry.title}
          </h2>
          {/* For press releases only */}
          {entry.preview_text && (
            <p className="fading-text line-clamp-5 text-lg">{`${entry.preview_text}`}</p>
          )}
        </div>
        {entry.preview_text && (
          <span className="hover-text-1 block text-xl font-semibold lg:text-2xl">Read more</span>
        )}
      </div>
    </Link>
  );
}
