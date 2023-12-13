import type { Metadata, Viewport } from "next";
import "@styles/globals.css";

import localFont from "next/font/local";
import Footer from "@shared/Footer";
import Head from "next/head";
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
    <html lang="en" className={`${MonaSans.className} bg-white`}>
      <head>
        <meta name="theme-color" content="#fff" />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
