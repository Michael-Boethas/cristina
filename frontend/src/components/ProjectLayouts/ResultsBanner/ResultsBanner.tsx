import { IProjectResult } from "types";

interface ResultsBannerProps {
  results: IProjectResult[];
  classes: string;
}

export default function ResultsBanner({
  results,
  classes,
}: ResultsBannerProps): React.JSX.Element {
  return (
    <div
      className={`${classes} flex min-h-[30vh] w-full flex-col items-center p-4 font-semibold`}
    >
      <h3 className="pb-8 pt-4 text-3xl lg:text-4xl xl:text-5xl">Results</h3>
      <div className="flex w-full flex-col items-center justify-center gap-8 sm:flex-row sm:items-baseline">
        {results.map((item: IProjectResult, index) => {
          return (
            <div
              key={index}
              className="flex max-w-[85%] flex-col items-center p-4 text-center sm:max-w-[33%] md:max-w-[25%]"
            >
              <span className="text-4xl font-extrabold lg:text-6xl xl:text-7xl">
                {item.figure}
              </span>
              <span className="text-xl">{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
