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
  title: "株式会社順風新社 | AIを活用した業務改善",
  description: "株式会社順風新社は、AI技術を活用した業務改善ソリューションを提供します。最新のAI技術で、ビジネスの効率化と成長をサポートします。",
  keywords: ["AI", "業務改善", "DX", "順風新社", "人工知能"],
  openGraph: {
    title: "株式会社順風新社 | AIを活用した業務改善",
    description: "AI技術を活用した業務改善ソリューションを提供します。",
    url: "https://jyunpushinsha.com",
    siteName: "株式会社順風新社",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
