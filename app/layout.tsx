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
  generator: "v0.app",
  openGraph: {
    title: "Hash Web Design - See Your Website Before You Pay",
    description:
      "Get a professional website for your local service business. See exactly how it looks before paying anything.",
    images: ["/og.png"],
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
