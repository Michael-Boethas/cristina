interface PreviewPDFProps {
  pdf: string;
  classes?: string;
}

export default function PreviewPDF({
  pdf,
  classes,
}: PreviewPDFProps): React.JSX.Element {
  return (
    <div className={classes}>
      <iframe
        src={`${pdf}#toolbar=0&navpanes=0&scrollbar=0&zoom=page-width`}
        className="hidden h-full w-full lg:block"
        title="PDF Preview"
      ></iframe>
    </div>
  );
}
