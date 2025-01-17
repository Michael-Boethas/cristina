import Metadata from "./Metadata";
// import { Barlow_Condensed, Montserrat } from "next/font/google";
import ViewportWarning from "../components/ViewportWarning/ViewportWarning";
import "../styles/main.scss";


// const barlowCondensed = Barlow_Condensed({
//   variable: "--font-barlow-condensed",
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

// const montserrat = Montserrat({
//   variable: "--font-montserrat",
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Metadata />
      </head>
      <body
        // className={`${barlowCondensed.variable} ${montserrat.variable} antialiased`}
      >
        <ViewportWarning />

        {children}
      </body>
    </html>
  );
}
