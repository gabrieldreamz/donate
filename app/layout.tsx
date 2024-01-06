import type { Metadata, Viewport } from "next";
import "@styles/globals.css";

import localFont from "next/font/local";
const MonaSans = localFont({ src: "../public/fonts/Mona-Sans.woff2" });

export const metadata: Metadata = {
  title: "Kindripple",
  description: "Donate to support the less poor",
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
