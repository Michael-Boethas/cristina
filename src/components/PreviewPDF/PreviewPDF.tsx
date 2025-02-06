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
        src={`${pdf}#view=toolbar=1&navpanes=0&scrollbar=0&zoom=page-width`}
        className="w-full h-full hidden lg:block"
        title="PDF Preview"
      ></iframe>
    </div>
  );
}
