import Metadata from "./Metadata";
import ViewportWarning from "../components/ViewportWarning/ViewportWarning";
import Header from "../components/Header/Header";
import "../styles/main.scss";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <head>
        <Metadata />
      </head>
      <body>
        <ViewportWarning />
        <Header />
        {children}
      </body>
    </html>
  );
}
