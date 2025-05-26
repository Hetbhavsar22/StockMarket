import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devhar - Your Gateway to Smart Investing",
  description:
    "Trade stocks, invest in mutual funds, buy insurance, and build wealth with India's most trusted investment platform.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <>
        <Navbar />
        <body className={inter.className}>{children}</body>
        <Footer />
      </>
    </html>
  );
}
