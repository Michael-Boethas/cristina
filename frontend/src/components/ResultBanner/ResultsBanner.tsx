import AnimatedFigure from 'components/AnimatedFigure/AnimatedFigure';
import { IProjectResult } from 'types';

export interface IResultsBannerProps {
  results: IProjectResult[];
  classes: string;
}

/**
 * Banner showing project results. It iterates through an array of results,
 * Uses the `AnimatedFigure` component for animation.
 *
 * @param {object} props - The props for the ResultsBanner component.
 * @param {IProjectResult[]} props.results - The array of project results to be displayed. Each result includes a figure and associated text.
 * @param {string} props.classes - A string of additional CSS classes to apply to the container.
 *
 * @returns {React.JSX.Element} The rendered results banner, including animated figures and descriptive text.
 */
export default function ResultsBanner({
  results,
  classes,
}: IResultsBannerProps): React.JSX.Element {
  return (
    <div className={`${classes} flex w-full flex-col items-center p-4 font-semibold`}>
      <h3 className="pb-8 pt-4 text-4xl font-normal lg:text-4xl xl:text-5xl">Results</h3>
      <div className="flex w-full flex-col items-center justify-center gap-8 pb-24 sm:flex-row sm:items-baseline sm:gap-32">
        {results.map((item: IProjectResult, index) => {
          const unit =
            item.figure_type === 'percentage (%)'
              ? '%'
              : item.figure_type === 'growing (+)'
                ? '+'
                : item.figure_type === 'monetary ($)'
                  ? '$'
                  : '';

          return (
            <div
              key={index}
              className="flex max-w-[85%] flex-col items-center gap-6 p-4 text-center sm:max-w-[40%] md:max-w-[30%] lg:max-w-[20%]"
            >
              <span className="font--barlow text-5xl font-extrabold lg:text-6xl xl:text-7xl">
                <AnimatedFigure value={item.figure} />
                {unit}
              </span>

              <span className="font--barlow text-3xl font-normal lg:text-4xl">{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
