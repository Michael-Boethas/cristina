import getMetadata from '../metadata';

export const metadata = getMetadata({
  title: 'Cristina Jiménez - Resume',
  description:
    'Review the work experience of Cristina Jiménez, a creative communications and marketing professional.',
});

export interface IResumeLayoutProps {
  children: React.ReactNode;
}

export default function ResumeLayout({ children }: IResumeLayoutProps): React.JSX.Element {
  return <>{children}</>;
}
