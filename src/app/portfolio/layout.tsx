import Metadata from "../Metadata";
import ViewportWarning from "../../components/ViewportWarning/ViewportWarning";
import Header from "../../components/Header/Header";
import "../../styles/main.scss";

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

      <ViewportWarning />
      <Header />
      {children}
    </>
  );
}
