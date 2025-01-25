

// Takes an array of strings and line break markers and returns a React element
export function renderWithLineBreaks(contentArray: Array<string | React.ReactNode>): React.ReactNode[] {
  return contentArray.map((item, index) =>
    item === "[br]" ? <br key={`line-break-${index}`} /> : item
  );
}
