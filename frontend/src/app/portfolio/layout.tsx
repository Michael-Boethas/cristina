import Metadata from '../Metadata';

interface IPortfolioLayoutProps {
  children: React.ReactNode;
}

export default function PortfolioLayout({ children }: IPortfolioLayoutProps): React.JSX.Element {
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
