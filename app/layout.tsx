import type { Metadata } from "next";
import localFont from "next/font/local";
import "../app/globals.css"; // Adjusted path for global styles
import TopNavbar from "@/components/top_nav";
import Script from "next/script";
import dynamic from "next/dynamic";
import { useRef } from "react";
import TawkChat from "./talk";

// Load local fonts
const geistSans = localFont({
  src: "../app/fonts/GeistVF.woff", // Corrected path for GeistSans font
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../app/fonts/GeistMonoVF.woff", // Corrected path for GeistMono font
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Define metadata for the layout
export const metadata: Metadata = {
  title: "Linkshield",
  description: "Linkshield website",
};

// RootLayout as a server component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#13252b] py-2.5 md:py-3.5`}
      >
        <div className="px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px]">
          <TopNavbar />
        </div>

        {children}

        <TawkChat />
      </body>
    </html>
  );
}
