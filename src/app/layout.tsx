import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omnihale | EMS",
  description:
    "Our platform is designed with a user-friendly interface for everyone, ensuring that users of all technical skill levels can navigate and utilize its features with ease. The intuitive layout, clear instructions, and accessible design make it simple for anyone to manage their tasks efficiently. Whether you're a tech-savvy professional or someone less familiar with digital tools, our interface adapts to your needs, providing a seamless and enjoyable experience. By prioritizing user experience, we ensure that our platform is not only powerful but also accessible, empowering everyone to achieve their goals effortlessly.",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
