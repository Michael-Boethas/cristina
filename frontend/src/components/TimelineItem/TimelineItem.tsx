import Link from 'next/link';
import { ITimelineItem } from 'types';

export interface ITimelineItemProps {
  entry: ITimelineItem;
}

/**
 * The item includes a date range, company name (with an optional link to the company's website), and the position held.
 *
 * @param {object} props - The props for the TimelineItem component.
 * @param {ITimelineItem} props.entry - The data for the timeline item, including dates, company, position, and optional URL.
 *
 * @returns {React.JSX.Element} The rendered timeline item with a date, company name, and position.
 */
export default function TimelineItem({ entry }: ITimelineItemProps): React.JSX.Element {
  return (
    <div className="group relative flex border-l-2 border-bg-4 py-10">
      <div className="float-left h-[30px] min-w-[30px] -translate-x-4 rounded-full bg-bg-4 transition-transform duration-300 group-hover:scale-[1.3]">
        &nbsp;
      </div>
      <div className="flex flex-col ps-2 text-lg md:text-2xl">
        <span className="font--barlow">{entry.dates}</span>
        {entry.url ? (
          <Link
            href={entry.url}
            target="_blank"
            rel="noopener"
            aria-label={`Visit ${entry.company}'s website`}
            className="hover-text-1 max-w-max italic"
          >
            {entry.company}
          </Link>
        ) : (
          <span className="max-w-max italic">{entry.company}</span>
        )}
        <span>{entry.position}</span>
      </div>
    </div>
  );
}
