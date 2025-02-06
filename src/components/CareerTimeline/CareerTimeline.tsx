import Link from "next/link";
import TimelineItem from "components/TimelineItem/TimelineItem";
import content from "../../content/resume-content.json";
import { ExperienceContent } from "types";

interface CareerTimelineProps {
  classes?: string;
}

export default function CareerTimeline({
  classes,
}: CareerTimelineProps): React.JSX.Element {
  return (
    <aside className={classes}>
      {Object.entries(content)
        .filter(([key]) => key !== "title") // Excluding the title field
        .map(([key, item]) => {
          return <TimelineItem key={key} entry={item as ExperienceContent} />;
        })}
      <Link
        href="/CV.pdf"
        target="_blank"
        rel="noopener"
        className="max-w-max md:self-center hover-bg-1 bg-bg-2 p-4 m-12 text-fg-2 rounded-xl"
      >
        View my resume
      </Link>
    </aside>
  );
}
