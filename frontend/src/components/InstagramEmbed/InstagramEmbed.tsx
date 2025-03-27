"use client";
import useInstagramEmbed from "hooks/useInstagramEmbed";

interface IInstagramEmbedProps {
  postUrl: string;
  classes?: string;
}
export default function InstagramEmbed({
  postUrl,
  classes,
}: IInstagramEmbedProps): React.JSX.Element {
  useInstagramEmbed();

  return (
    <div className={`${classes} instagram-embed hover-pop`}>
      <blockquote
        className="instagram-media md:w-[30vw] lg:w-[25vw]"
        data-instgrm-permalink={postUrl}
        data-instgrm-version="14"
      ></blockquote>
    </div>
  );
}
