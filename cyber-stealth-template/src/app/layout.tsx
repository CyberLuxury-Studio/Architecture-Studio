import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GHOST_OS - Stealth Beta",
  description: "Join the stealth beta. Limited access.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={clsx("scanlines",
          spaceGrotesk.variable,
          inter.variable,
          jetbrainsMono.variable,
          "antialiased selection:bg-primary/30 selection:text-primary font-body"
        )}
      >
        {children}
      </body>
    </html>
  );
}
