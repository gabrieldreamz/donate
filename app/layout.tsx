import type { Metadata, Viewport } from "next";
import "@styles/globals.css";

import localFont from "next/font/local";
import Footer from "@shared/Footer";
import MainNavigation from "@components/routes/main-navigation/MainNavigation";
const MonaSans = localFont({ src: "../public/fonts/Mona-Sans.woff2" });

export const metadata: Metadata = {
  title: "ForThePeople",
  description: "Donate to support the needy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${MonaSans.className} bg-gray-100`}>
      <head>
        <meta name="theme-color" content="#fff" />
      </head>
      <body className="TapHighlight">
        <MainNavigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
