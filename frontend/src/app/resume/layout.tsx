import Metadata from "../Metadata";
interface AboutLayoutProps {
  children: React.ReactNode;
}

export default function AboutLayout({
  children,
}: AboutLayoutProps): React.JSX.Element {
  return (
    <>
      <Metadata
        title="Cristina Jiménez - Resume"
        description="Review the work experience of Cristina Jiménez, a creative communications and marketing professional."
      />
      {children}
    </>
  );
}
