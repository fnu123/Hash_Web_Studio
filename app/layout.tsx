import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hash Web Design - See Your Website Before You Pay",
  description:
    "Get a professional website for your local service business. See exactly how it looks before paying anything. Free demo websites for plumbers, HVAC, electricians, contractors, and more.",

  openGraph: {
    title: "Hash Web Design - See Your Website Before You Pay",
    description:
      "Get a professional website for your local service business. See exactly how it looks before paying anything.",
    url: "https://hashwebdesign.com",
    siteName: "Hash Web Design",
    images: [
      {
        url: "https://hashwebdesign.com/hero-mockup.jpg",
        width: 1200,
        height: 630,
        alt: "Hash Web Design",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hash Web Design - See Your Website Before You Pay",
    description:
      "Professional websites for local businesses. See your website before paying.",
    images: ["https://hashwebdesign.com/hero-mockup.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={`${inter.variable} font-sans relative antialiased`}>
          {children}
        </body>
      </html>
    </>
  );
}
