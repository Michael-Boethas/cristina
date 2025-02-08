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
    </aside>
  );
}
