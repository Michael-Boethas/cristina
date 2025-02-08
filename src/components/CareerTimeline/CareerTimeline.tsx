import TimelineItem from "components/TimelineItem/TimelineItem";
// import content from "../../content/resume-content.json";
import { ExperienceContent } from "types";

interface CareerTimelineProps {
  experiences: Record<string, ExperienceContent>; // Pass experiences without title
  classes?: string;
}

export default function CareerTimeline({
  experiences,
  classes,
}: CareerTimelineProps): React.JSX.Element {
  return (
    <aside className={classes}>
      {Object.entries(experiences)
        .filter(([key]) => key !== "title") // Excluding the title field
        .map(([key, item]) => {
          return <TimelineItem key={key} entry={item as ExperienceContent} />;
        })}
    </aside>
  );
}
