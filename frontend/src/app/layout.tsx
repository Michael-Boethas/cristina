import getMetadata from './metadata';
import GlobalStyles from 'components/GlobalStyles/GlobalStyles';
import ViewportWarning from '../components/ViewportWarning/ViewportWarning';
import Header from '../components/Header/Header';
import { fetchStrapi } from 'utils/utils';
import { IHeaderData } from 'types';
import fallbackData from '../content/header.json' assert { type: 'json' };
import '../styles/main.scss';

export const metadata = getMetadata({
  title: 'Cristina Jimenez - Home',
  description:
    'Portfolio of a communications and international marketing specialist who enjoys producing content that drives real value for ambitious B2B and B2C companies.',
});
export interface IRootLayoutProps {
  children: React.ReactNode;
}

/**
 * Root layout for the application.
 *
 * Applies global styles, shows viewport warning, and renders the header + children.
 *
 * @param {IRootLayoutProps} props - Props containing React children.
 * @returns {Promise<React.JSX.Element>} The root layout element.
 */
export default async function RootLayout({
  children,
}: IRootLayoutProps): Promise<React.JSX.Element> {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/header`;
  const headerProps: IHeaderData = (await fetchStrapi(url)) ?? fallbackData;

  return (
    <html lang="en">
      <body>
        <GlobalStyles />
        <ViewportWarning />
        <Header content={headerProps} />
        {children}
      </body>
    </html>
  );
}
