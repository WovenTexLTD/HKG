import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HKG Steel Mills Ltd | Leading Steel Manufacturer in Bangladesh",
  description:
    "HKG Steel Mills Ltd is a leading steel manufacturer based in Sonargaon, Bangladesh. ISO 9001:2015 certified. 120,000 tonnes annual capacity. Steel billets and deformed bar for national infrastructure.",
  keywords: [
    "HKG Steel",
    "steel manufacturer Bangladesh",
    "deformed bar",
    "steel billets",
    "rebar Bangladesh",
    "Sonargaon steel mill",
    "ISO 9001 steel",
    "Haseen Kayaba Group",
    "TMT bar Bangladesh",
    "construction steel Bangladesh",
  ],
  authors: [{ name: "HKG Steel Mills Ltd" }],
  creator: "HKG Steel Mills Ltd",
  publisher: "HKG Steel Mills Ltd",
  metadataBase: new URL("https://www.hkgsteel.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.hkgsteel.com",
    siteName: "HKG Steel Mills Ltd",
    title: "HKG Steel Mills Ltd | Leading Steel Manufacturer in Bangladesh",
    description:
      "HKG Steel Mills Ltd is a leading steel manufacturer based in Sonargaon, Bangladesh. ISO 9001:2015 certified. 120,000 tonnes annual capacity. Steel billets and deformed bar for national infrastructure.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HKG Steel Mills Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HKG Steel Mills Ltd | Leading Steel Manufacturer in Bangladesh",
    description:
      "ISO 9001:2015 certified steel manufacturer in Bangladesh. 120,000 tonnes annual capacity.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#2D3436" />
      </head>
      <body className="antialiased" style={{ fontFamily: "var(--font-inter), Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
