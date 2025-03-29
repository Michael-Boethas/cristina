interface YoutubeEmbedProps {
  url: string;
  classes?: string;
}

export default function YoutubeEmbed({
  url,
  classes,
}: YoutubeEmbedProps): React.JSX.Element {
  return (
    <iframe
      key={url}
      src={url}
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      className={classes}
    ></iframe>
  );
}
