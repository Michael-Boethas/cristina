import TimelineItem from "components/TimelineItem/TimelineItem";
import { useFetch } from "hooks/useFetch";
import { ITimelineItem, ICareerTimelineData } from "types";
import fallbackData from "../../content/career-timeline.json" assert { type: "json" };

interface CareerTimelineProps {
  classes?: string;
}

export default function CareerTimeline({
  classes,
}: CareerTimelineProps): React.JSX.Element {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/career-timeline?populate=experiences`;
  const { data } = useFetch<ICareerTimelineData>(url);
  const content = data ?? fallbackData;

  return (
    <aside className={classes}>
      {/* Iteration over experiences */}
      {content.experiences.map((item: ITimelineItem, index: number) => {
        return <TimelineItem key={index} entry={item as ITimelineItem} />;
      })}
    </aside>
  );
}
