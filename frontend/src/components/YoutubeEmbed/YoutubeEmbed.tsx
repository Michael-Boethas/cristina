export interface IYoutubeEmbedProps {
  url: string;
  classes?: string;
}

/**
 * Embeds a YouTube video in the page using an iframe.
 * It allows the rendering of YouTube content via an iframe element and accepts optional styling through the `classes` prop.
 *
 * @oaram {Object} props
 * @param {string} props.url - The YouTube video URL to embed.
 * @param {string} [props.classes] - Optional CSS classes to apply to the iframe element.
 *
 * @returns {JSX.Element} A JSX element containing an iframe with the provided YouTube video URL.
 */
export default function YoutubeEmbed({ url, classes }: IYoutubeEmbedProps): React.JSX.Element {
  return (
    <iframe
      key={url}
      src={url}
      title="Youtube embed"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      className={classes}
    ></iframe>
  );
}
