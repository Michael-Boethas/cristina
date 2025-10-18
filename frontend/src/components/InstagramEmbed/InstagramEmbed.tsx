'use client';
import useInstagramEmbed from 'hooks/useInstagramEmbed';

/**
 * Renders an embedded Instagram post from URL.
 *
 * @param {IInstagramEmbedProps} props - The props for the Instagram embed.
 * @param {string} props.postUrl - The URL of the Instagram post to embed.
 * @param {string} [props.classes] - Optional CSS classes to apply to the component.
 *
 * @returns {React.JSX.Element} The rendered Instagram embed component with the given post URL.
 */
export interface IInstagramEmbedProps {
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
        className="instagram-media md:w-[30vw] lg:w-[20vw]"
        data-instgrm-permalink={postUrl}
        data-instgrm-version="14"
      ></blockquote>
    </div>
  );
}
