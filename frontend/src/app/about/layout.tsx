import getMetadata from '../metadata';

export const metadata = getMetadata({
  title: 'Cristina Jiménez - About',
  description:
    'Learn more about Cristina Jiménez, a creative communications and marketing professional.',
});

export interface IAboutLayoutProps {
  children: React.ReactNode;
}

export default function AboutLayout({ children }: IAboutLayoutProps): React.JSX.Element {
  return <>{children}</>;
}
