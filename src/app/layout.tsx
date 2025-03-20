import type { Metadata } from "next";
import "./globals.css";

import { satoshi } from "@/utils/font";

export const metadata: Metadata = {
  title: "Omnihale",
  description: "Delos: Connect, Sell, Teach, Eat and Grow",
  keywords: ["Omnihale", "Innovative Tech StartUp from Africa"],
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className}>{children}</body>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4115406660116385"
        crossOrigin="anonymous"
      ></script>
    </html>
  );
}
