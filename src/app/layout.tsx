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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Correct viewport for all mobile browsers */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
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
