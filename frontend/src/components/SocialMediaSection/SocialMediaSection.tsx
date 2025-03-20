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
      <h3 className="py-8 text-4xl md:text-5xl">{content.label}</h3>

      <div className="flex flex-col justify-center gap-6 py-8 md:flex-row md:flex-wrap">
        {content.item?.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              className="relative aspect-[3/4] w-[90vw] border border-gray-400 sm:w-[45vw] lg:w-[15vw]"
            >
              <Image src={item.thumbnail_url} alt="Social Media links" fill />
              <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center text-2xl font-semibold text-[#0000] hover:bg-[#000b] hover:text-fg-2">
                Visit link
              </div>
            </Link>
          );
        })}
        <iframe src="https://www.instagram.com/p/CWEeGycNuno/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D"></iframe>
      </div>
    </div>
  );
}
