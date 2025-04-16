interface IYoutubeEmbedProps {
  url: string;
  classes?: string;
}

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
