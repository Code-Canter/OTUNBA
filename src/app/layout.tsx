// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";
import StructuredData from "@/components/SEO/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: `${SITE.name} - Software Developer`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: SITE.keywords.join(', '),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} - Software Developer`,
    description: SITE.description,
    images: [
      {
        url: SITE.defaultImage,
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   site: SITE.twitter,
  //   creator: SITE.twitter,
  //   title: `${SITE.name} - Developer & Designer`,
  //   description: SITE.description,
  //   images: [SITE.defaultImage],
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <div className="!mb-5"></div> */}
        <main className="min-h-screen pt-8">
          {children}
        </main>
      </body>
    </html>
  );
}