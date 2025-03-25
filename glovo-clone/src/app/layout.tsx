import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muriithi Empire Farms | Farm Fresh Produce",
  description: "Experience farm-fresh organic products directly from our family-owned farms to your table. Visit our farm or order online.",
  keywords: ["organic farm", "farm fresh", "avocados", "poultry", "Andrew Poultry Farm", "Kinunga Fresh Avocados", "sustainable farming"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muriithi-farms.same-app.com",
    title: "Muriithi Empire Farms | Farm Fresh Produce",
    description: "Experience farm-fresh organic products directly from our family-owned farms to your table. Visit our farm or order online.",
    siteName: "Muriithi Empire Farms",
    images: [
      {
        url: "https://muriithi-farms.same-app.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Muriithi Empire Farms"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Muriithi Empire Farms | Farm Fresh Produce",
    description: "Experience farm-fresh organic products directly from our family-owned farms to your table. Visit our farm or order online.",
    images: ["https://muriithi-farms.same-app.com/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
