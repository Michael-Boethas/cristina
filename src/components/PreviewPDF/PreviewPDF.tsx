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
        src={`${pdf}#view=toolbar=1&navpanes=0&scrollbar=0`}
        className="w-full h-[80vh] hidden lg:block"
        title="PDF Preview"
      ></iframe>
    </div>
  );
}
