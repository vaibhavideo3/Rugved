import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";

export const metadata: Metadata = {
  title: "Seraphic Tradelinks | Pharma Consulting & Cold Chain Solutions India",
  description:
    "Seraphic Tradelinks offers integrated pharma consulting, cold chain logistics, thermoformed tray packaging, and medical device sourcing solutions across India. GMP consulting, pharma sourcing solutions, and drug delivery systems expertise.",
  keywords: [
    "pharma consulting services India",
    "cold chain solutions India",
    "pharma cold chain logistics",
    "pharmaceutical packaging materials India",
    "thermoformed trays manufacturers India",
    "PVC PET HIPS trays supplier",
    "medical device consulting India",
    "drug delivery systems consulting",
    "GMP consulting India",
    "pharma sourcing solutions India",
  ],
  openGraph: {
    title: "Seraphic Tradelinks | Pharma Consulting & Sourcing Solutions",
    description:
      "End-to-end pharma consulting, cold chain, packaging, and medical device solutions in India.",
    type: "website",
    locale: "en_IN",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
