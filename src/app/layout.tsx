import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Seif Baichoo | Portfolio",
  description:
    "Cybersecurity student and full-stack developer from Mauritius. Building secure systems, robust web apps, and IoT solutions.",
  keywords: [
    "cybersecurity",
    "portfolio",
    "full stack developer",
    "Mauritius",
    "Laravel",
    "Vue.js",
    "Linux",
  ],
  authors: [{ name: "Muhammad Seif Al Din Baichoo" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-hacker-bg text-terminal-text antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
