
import { Inter } from "next/font/google";

import "@/styles/reset.css";

import "@/styles/globals.css";

import React from "react";

// const inter = Inter({ subsets: ['latin'] })
// className={inter.className}


export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
