import type { Metadata, Viewport } from "next";
import "@styles/globals.css";
import "@styles/loaders.css";

import localFont from "next/font/local";
const MonaSans = localFont({ src: "../public/fonts/Mona-Sans.woff2" });

export const metadata: Metadata = {
  title: "AmorDivina",
  description: "Spreading love and making difference with AmorDivina",
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
      <body className="TapHighlight">{children}</body>
    </html>
  );
}
