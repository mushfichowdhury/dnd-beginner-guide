import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const cinzel = localFont({
  src: [
    { path: "../fonts/Cinzel-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Cinzel-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});

const nunitoSans = localFont({
  src: [
    { path: "../fonts/NunitoSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/NunitoSans-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/NunitoSans-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "D&D Character Creator — Beginner's Guide",
  description:
    "A beginner-friendly visual guide to building your first D&D 5e or 5.5e character. Explore races, classes, and subclasses from the PHB, Tasha's Cauldron, and Xanathar's Guide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${cinzel.variable} ${nunitoSans.variable}`}>
      <body className="min-h-full flex flex-col bg-gray-950 text-gray-100">
        {children}
      </body>
    </html>
  );
}
