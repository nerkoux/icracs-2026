import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ICRACS 2026 - International Conference on Recent Advances in AI, Computer Vision & Smart Systems",
  description: "3rd International Conference on Recent Advances in Artificial Intelligence, Computer Vision & Smart Systems organized by Poornima Institute of Engineering & Technology, Jaipur on April 17-18, 2026",
  keywords: "ICRACS, AI, Computer Vision, Smart Systems, Conference, PIET, Jaipur, Artificial Intelligence, Machine Learning",
  authors: [{ name: "PIET ICRACS Committee" }],
  openGraph: {
    title: "ICRACS 2026",
    description: "International Conference on Recent Advances in AI, Computer Vision & Smart Systems",
    url: "https://icracs.poornima.org",
    siteName: "ICRACS 2026",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/piet.jpg",
        width: 1200,
        height: 630,
        alt: "ICRACS 2026 - International Conference on Recent Advances in AI, Computer Vision & Smart Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ICRACS 2026",
    description: "International Conference on Recent Advances in AI, Computer Vision & Smart Systems",
    images: ["/piet.jpg"],
    creator: "@PIET_ICRACS",
    site: "@PIET_ICRACS",
  },
  metadataBase: new URL("https://icracs.poornima.org"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
