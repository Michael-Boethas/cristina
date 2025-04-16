import Image from 'next/image';

interface IAboutDecorationProps {
  imageList: ({ url: string } | string)[];
  classes?: string;
}

export default function AboutDecoration({
  imageList,
  classes,
}: IAboutDecorationProps): React.JSX.Element {
  return (
    <div className={`${classes} about__decoration`} aria-hidden="true">
      {imageList.map((image, index) => {
        const src = typeof image === 'string' ? image : image.url;
        return (
          <Image
            key={index}
            src={src}
            alt={`Image representing Cristina #${index + 1}`}
            width={600}
            height={800}
          />
        );
      })}
    </div>
  );
}
