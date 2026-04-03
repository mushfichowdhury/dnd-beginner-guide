import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-gray-950 text-gray-100">
        {children}
      </body>
    </html>
  );
}
