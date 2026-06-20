import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["italic", "normal"],
});

export const metadata: Metadata = {
  title: {
    default: "Metabrix AI | Premium AI Website Development Agency",
    template: "%s | Metabrix AI",
  },
  description:
    "Metabrix AI designs and develops elite, Next.js websites powered by autonomous agent intelligence. Elevate your brand with our luxury dark-themed digital experiences.",
  keywords: [
    "AI Web Design",
    "Next.js Agency",
    "Premium Web Development",
    "Luxury SaaS Design",
    "Autonomous Agents",
    "AI Integration",
    "Metabrix AI",
  ],
  authors: [{ name: "Metabrix AI Team" }],
  creator: "Metabrix AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://metabrix.ai",
    title: "Metabrix AI | Premium AI Website Development Agency",
    description:
      "Metabrix AI designs and develops elite, Next.js websites powered by autonomous agent intelligence. Elevate your brand with our luxury dark-themed digital experiences.",
    siteName: "Metabrix AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metabrix AI | Premium AI Website Development Agency",
    description:
      "Metabrix AI designs and develops elite, Next.js websites powered by autonomous agent intelligence. Elevate your brand with our luxury dark-themed digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-brand-dark text-foreground selection:bg-brand-gold/20 selection:text-brand-gold">
        {/* Sticky Global Navigation */}
        <Navbar />

        {/* Global Page Container System */}
        <main className="flex-grow pt-[80px] md:pt-[88px] flex flex-col">
          {children}
        </main>

        {/* Global Floating Action Contact Buttons */}
        <FloatingContact />

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
