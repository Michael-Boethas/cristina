import TimelineItem from "components/TimelineItem/TimelineItem";
import { fetchStrapi } from "utils/utils";
import { ITimelineItem, ICareerTimelineData } from "types";
import fallbackData from "../../content/career-timeline.json" assert { type: "json" };

interface CareerTimelineProps {
  classes?: string;
}

export default async function CareerTimeline({
  classes,
}: CareerTimelineProps): Promise<React.JSX.Element> {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/career-timeline?populate=experiences`;
  const content: ICareerTimelineData = (await fetchStrapi(url)) ?? fallbackData;

  return (
    <aside className={classes}>
      {/* Iteration over experiences */}
      {content.experiences.map((item: ITimelineItem, index: number) => {
        return <TimelineItem key={index} entry={item as ITimelineItem} />;
      })}
    </aside>
  );
}
