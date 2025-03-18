import Image from "next/image";
import Link from "next/link";
import { ISocialMediaSection } from "types";

interface ISocialMediaSectionProps {
  content: ISocialMediaSection;
  classes?: string;
}
export default function SocialMediaSection({
  content,
  classes,
}: ISocialMediaSectionProps): React.JSX.Element {
  return (
    <div className={`${classes} items-center`}>
      <h3 className="py-8 text-4xl">{content.label}</h3>

      <div className="flex flex-col flex-wrap justify-evenly gap-6 py-8 md:flex-row">
        {content.item?.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              className="relative aspect-[3/4] w-[90vw] sm:w-[45vw] lg:w-[20vw]"
            >
              <Image src={item.thumbnail_url} alt="Social Media link" fill />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
