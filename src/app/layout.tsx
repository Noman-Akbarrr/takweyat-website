import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Navigation, Footer } from "@/components/ui";
import { Analytics } from "@/components/analytics/Analytics";
import { organizationSchema } from "@/lib/seo/schema";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "Takweyat Foundation — Helping Communities Build a Better Future",
    template: "%s | Takweyat Foundation",
  },
  description:
    "Takweyat Foundation is a non-profit charitable organization working across 5 countries to provide education, food, healthcare, and hope where it's needed most.",
  keywords: [
    "charity",
    "non-profit",
    "education",
    "humanitarian aid",
    "Pakistan",
    "Palestine",
    "Sudan",
    "Zakat",
    "Sadaqah",
    "community development",
    "donate",
    "volunteer",
  ],
  authors: [{ name: "Takweyat Foundation" }],
  creator: "Takweyat Foundation",
  publisher: "Takweyat Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://takweyat.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://takweyat.org",
    siteName: "Takweyat Foundation",
    title: "Takweyat Foundation — Helping Communities Build a Better Future",
    description:
      "Working across 5 countries to provide education, food, healthcare, and hope where it's needed most.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Takweyat Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Takweyat Foundation — Helping Communities Build a Better Future",
    description:
      "Working across 5 countries to provide education, food, healthcare, and hope where it's needed most.",
    images: ["/og-image.jpg"],
    creator: "@takweyat",
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
  alternates: {
    canonical: "https://takweyat.org",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Analytics />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
