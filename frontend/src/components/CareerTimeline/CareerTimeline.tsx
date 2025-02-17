import TimelineItem from "components/TimelineItem/TimelineItem";
import { ITimelineItem, ICareerTimelineData } from "types";
import data from "../../content/career-timeline.json" assert { type: "json" };

interface CareerTimelineProps {
  classes?: string;
}

export default function CareerTimeline({
  classes,
}: CareerTimelineProps): React.JSX.Element {
  const content: ICareerTimelineData = data;
  return (
    <aside className={classes}>
      {/* Iteration over experiences */}
      {content.experienceList.map((item: ITimelineItem, index: number) => {
        return <TimelineItem key={index} entry={item as ITimelineItem} />;
      })}
    </aside>
  );
}
