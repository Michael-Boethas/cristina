import Metadata from "./Metadata";
import GlobalStyles from "components/GlobalStyles/GlobalStyles";
import ViewportWarning from "../components/ViewportWarning/ViewportWarning";
import Header from "../components/Header/Header";
import "../styles/main.scss";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <head>
        <Metadata />
      </head>
      <body>
        <GlobalStyles />
        <ViewportWarning />
        <Header />
        {children}
      </body>
    </html>
  );
}
