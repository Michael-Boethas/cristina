import Image from 'next/image';
import Link from 'next/link';
import InstagramEmbed from 'components/InstagramEmbed/InstagramEmbed';
import { ISocialMediaSection } from 'types';

interface ISocialMediaSectionProps {
  content: ISocialMediaSection;
  classes?: string;
}
export default function SocialMediaSection({
  content,
  classes,
}: ISocialMediaSectionProps): React.JSX.Element {
  return (
    <div className={`${classes}`}>
      <h3 className="py-8 text-4xl md:text-5xl">{content.label}</h3>
      <div className="flex flex-col justify-center gap-12 py-8 sm:flex-row sm:flex-wrap">
        {/* Embedded IG */}
        {content.embed?.map((item, index) => {
          return (
            <InstagramEmbed
              key={index}
              postUrl={item.url}
              classes="overflow-hidden max-w-[100vw]"
            />
          );
        })}

        {/* Horizontal divider */}
        {content.embed && content.links ? (
          <div className="my-8 h-[1px] w-full bg-[#0004]">&nbsp;</div>
        ) : null}

        {/* Link + thumbnail */}
        {content.links?.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.url}
              target="_blank"
              aria-label="Link to social media post"
              className="relative aspect-[3/4] w-[90vw] shadow-2xl xs:w-[75vw] sm:w-[35vw] lg:w-[15vw]"
            >
              <Image
                src={item.thumbnail_url}
                alt="Social Media link"
                fill
                sizes="90vw"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center text-2xl font-semibold text-[#0000] hover:bg-[#000b] hover:text-fg-2">
                <span> View post</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
