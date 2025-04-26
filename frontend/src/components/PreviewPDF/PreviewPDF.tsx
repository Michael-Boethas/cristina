export interface IPreviewPDFProps {
  pdf: string;
  classes?: string;
}

/**
 * A component that displays a preview of a PDF document within an iframe.
 *
 * @param {object} props - The props for the PreviewPDF component.
 * @param {string} props.pdf - The URL of the PDF to preview.
 * @param {string} [props.classes] - An optional string of additional CSS classes to apply to the container.
 *
 * @returns {React.JSX.Element} The rendered iframe containing the PDF preview.
 */
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
