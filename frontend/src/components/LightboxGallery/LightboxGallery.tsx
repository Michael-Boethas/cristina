import Image from "next/image";

interface ILightboxGalleryProps {
  pictures: string[];
  classes?: string;
}

export default function LightboxGallery({
  pictures,
  classes,
}: ILightboxGalleryProps): React.JSX.Element {
  return <div className={classes}></div>;
}
