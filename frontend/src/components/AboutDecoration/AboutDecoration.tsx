import Image from 'next/image';

interface IAboutDecorationProps {
  imageList: string[];
  classes?: string;
}

export default function AboutDecoration({
  imageList,
  classes,
}: IAboutDecorationProps): React.JSX.Element {
  return (
    <div className={`${classes} about__decoration`} aria-hidden="true">
      {imageList.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Image representing Cristina #${index + 1}`}
          width={600}
          height={800}
        />
      ))}
    </div>
  );
}
