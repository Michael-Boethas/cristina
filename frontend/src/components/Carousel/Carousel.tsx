import Image from "next/image";

interface ICarouselProps {
  pictures: string[];
  classes?: string;
}

export default function Carousel({
  pictures,
  classes,
}: ICarouselProps): React.JSX.Element {
  return (
    <div className={classes}>
      {pictures.map((picture, index) => {
        return (
          <div key={index} className="">
            <Image
              src={picture}
              alt={`Gallery image ${index}`}
              width={439}
              height={778}
            />
          </div>
        );
      })}
    </div>
  );
}
