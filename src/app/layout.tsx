import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/reset.css";

import "@/styles/globals.css";

// const inter = Inter({ subsets: ['latin'] })
// className={inter.className}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
