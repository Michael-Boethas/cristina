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
        src={`${pdf}#toolbar=0&navpanes=0&scrollbar=0`}
        className="hidden min-h-screen w-full lg:block"
        title="PDF Preview"
      ></iframe>
    </div>
  );
}
