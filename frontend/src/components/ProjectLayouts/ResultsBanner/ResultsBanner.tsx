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
      className={`${classes} flex w-full flex-col items-center p-4 font-semibold`}
    >
      <h3 className="pb-8 pt-4 text-4xl font-normal lg:text-4xl xl:text-5xl">
        Results
      </h3>
      <div className="flex w-full flex-col items-center justify-center gap-8 pb-24 sm:flex-row sm:items-baseline sm:gap-32">
        {results.map((item: IProjectResult, index) => {
          const unit =
            item.figure_type === "percentage (%)"
              ? "%"
              : item.figure_type === "growing (+)"
                ? "+"
                : item.figure_type === "monetary ($)"
                  ? "$"
                  : "";

          return (
            <div
              key={index}
              className="flex max-w-[85%] flex-col items-center gap-6 p-4 text-center sm:max-w-[40%] md:max-w-[30%] lg:max-w-[20%]"
            >
              <span className="font--barlow text-5xl font-extrabold lg:text-6xl xl:text-7xl">
                {`${item.figure.toString()} ${unit}`}
              </span>
              <span className="font--barlow text-3xl font-normal">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
