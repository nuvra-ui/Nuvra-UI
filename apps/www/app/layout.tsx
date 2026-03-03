import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer";

const rubik = Rubik({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nuvra-UI",
  keywords: ["UI-Libary", "Nuvra-UI", "Development", "React", "JavaScript"],
  description: "Build flexible, unstyled components - your design, your way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className={rubik.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
