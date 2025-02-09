import Link from "next/link";
import { ExperienceContent } from "types";

interface TimelineItemProps {
  entry: ExperienceContent;
}

export default function TimelineItem({
  entry,
}: TimelineItemProps): React.JSX.Element {
  return (
    <div className="flex border-l-2 border-bg-4 py-10">
      <div className="float-left h-[30px] min-w-[30px] -translate-x-4 rounded-full bg-bg-4">
        &nbsp;
      </div>
      <div className="flex flex-col ps-2 text-lg md:text-2xl">
        <span className="font--barlow">{entry.dates}</span>
        <Link
          href={entry.url}
          target="_blank"
          rel="noopener"
          className="hover-fg-1 max-w-max"
        >
          {entry.company}
        </Link>
      </div>
    </div>
  );
}
