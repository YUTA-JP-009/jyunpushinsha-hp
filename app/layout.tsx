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
  title: "株式会社順風新社",
  description: "順風新社は「テクノロジーで働く人を幸せにする」をミッションに、AIなどの最新テクノロジーを活用して順風満帆なビジネスを実現します",
  keywords: ["順風新社", "AI", "業務改善", "DX", "人工知能", "テクノロジー"],
  openGraph: {
    title: "株式会社順風新社",
    description: "順風新社は「テクノロジーで働く人を幸せにする」をミッションに、AIなどの最新テクノロジーを活用して順風満帆なビジネスを実現します",
    url: "https://jyunpushinsha.com",
    siteName: "株式会社順風新社",
    locale: "ja_JP",
    type: "website",
  },
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
  verification: {
    google: 'verification_token', // Google Search Consoleで取得後に設定
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '株式会社順風新社',
    alternateName: '順風新社',
    url: 'https://jyunpushinsha.com',
    logo: 'https://jyunpushinsha.com/logo.png',
    description: '順風新社は「テクノロジーで働く人を幸せにする」をミッションに、AIなどの最新テクノロジーを活用して順風満帆なビジネスを実現します',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'yuta.sakamoto@jyunpushinsha.com',
      contactType: 'customer service',
    },
    sameAs: [
      'https://jyunpushinsha.com',
    ],
  };

  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
