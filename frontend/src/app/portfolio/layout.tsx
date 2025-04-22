import getMetadata from '../metadata';

export const metadata = getMetadata({
  title: 'Cristina Jiménez - Portfolio',
  description:
    'Discover the works of Cristina Jiménez, a creative communications and marketing professional.',
});

export interface IResumeLayoutProps {
  children: React.ReactNode;
}

export default function PortfolioLayout({ children }: IResumeLayoutProps): React.JSX.Element {
  return <>{children}</>;
}
