import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: [
    { path: "../fonts/Inter-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Inter-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Inter-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/Inter-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: [
    { path: "../fonts/SpaceGrotesk-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/SpaceGrotesk-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../fonts/SpaceGrotesk-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-heading",
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
    <html lang="en" className={`h-full antialiased ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-full flex flex-col bg-gray-950 text-gray-100">
        {children}
      </body>
    </html>
  );
}
