import Metadata from "../Metadata";

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export default function PortfolioLayout({
  children,
}: PortfolioLayoutProps): React.JSX.Element {
  return (
    <>
      <Metadata
        title="Cristina Jiménez - Portfolio"
        description="Discover the works of Cristina Jiménez, a creative communications and marketing professional."
      />
      {children}
    </>
  );
}
