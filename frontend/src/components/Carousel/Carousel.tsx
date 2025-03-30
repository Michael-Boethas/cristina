import Image from "next/image";

interface ICarouselProps {
  pictures: string[];
  classes?: string;
}

export default function Carousel({
  pictures,
  classes,
}: ICarouselProps): React.JSX.Element {
  return <div className={classes}></div>;
}
