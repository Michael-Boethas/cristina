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
    <div className={`${classes} instagram-embed`}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={postUrl}
        data-instgrm-version="14"
      ></blockquote>
    </div>
  );
}
