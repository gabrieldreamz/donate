import type { Metadata, Viewport } from "next";
import "@styles/globals.css";
import "@styles/loaders.css";

import localFont from "next/font/local";
const MonaSans = localFont({ src: "../public/fonts/Mona-Sans.woff2" });

export const metadata: Metadata = {
  title:
    "Amor Divina: Transforming Lives through Your Generosity | Donate Today for a Brighter Future",
  description:
    "Join Amor Divina in spreading love and making a difference. Your generosity fuels our mission to create a brighter future. Learn more and donate today.",
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
