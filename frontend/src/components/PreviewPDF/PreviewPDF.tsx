interface IPreviewPDFProps {
  pdf: string;
  classes?: string;
}

export default function PreviewPDF({ pdf, classes }: IPreviewPDFProps): React.JSX.Element {
  return (
    <div className={classes}>
      <iframe
        src={`${pdf}#toolbar=0&navpanes=0&scrollbar=0`}
        className="hidden aspect-[1000/1414] w-full shadow-[0_2px_6px_1px_#1114] lg:block"
        title="PDF Preview"
      ></iframe>
    </div>
  );
}
