import TimelineItem from 'components/TimelineItem/TimelineItem';
import { fetchStrapi } from 'utils/utils';
import { ITimelineItem, ICareerTimelineData } from 'types';
import fallbackData from '../../content/career-timeline.json' assert { type: 'json' };

export interface ICareerTimelineProps {
  classes?: string;
}

/**
 * Renders a resume summary as career timeline.
 *
 * @param {Object} props - The props for the component.
 * @param {string} [props.classes] - Optional custom CSS class names for styling the component.
 * @returns {React.JSX.Element} The JSX representation of the career timeline.
 */
export default async function CareerTimeline({
  classes,
}: ICareerTimelineProps): Promise<React.JSX.Element> {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/career-timeline?populate=experiences`;
  const content: ICareerTimelineData = (await fetchStrapi(url)) ?? fallbackData;

  return (
    <aside className={classes}>
      {/* Iteration over experiences */}
      {content.experiences.map((item: ITimelineItem, index: number) => {
        return <TimelineItem key={index} entry={item} />;
      })}
    </aside>
  );
}
