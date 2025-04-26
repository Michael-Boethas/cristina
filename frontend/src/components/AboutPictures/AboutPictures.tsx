import Image from 'next/image';
import { IAboutPageData } from 'types';

export interface IAboutPicturesProps {
  imageList: IAboutPageData['aboutImages'];
  classes?: string;
}

/**
 * Displays a list of images with fade-in animations to decorate the About page.
 * @param {IAboutPicturesProps} props - Component props
 */
export default function AboutPictures({
  imageList,
  classes,
}: IAboutPicturesProps): React.JSX.Element {
  return (
    <div className={`${classes} about__pictures`} aria-hidden="true">
      {imageList.map((image, index) => {
        return (
          <Image
            key={index}
            src={image.url}
            alt={`Image representing Cristina Jiménez #${index + 1}`}
            className={`fade-in`}
            style={{ animationDelay: `${index * 250}ms` }}
            width={600}
            height={800}
          />
        );
      })}
    </div>
  );
}
