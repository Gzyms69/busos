import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "BusOS — Analityka Komunikacji Miejskiej w Polsce",
  description: "System analityki transportu publicznego i dostępności przystanków w 30 aglomeracjach autorstwa Dawida Czerwińskiego (czerwinskidawid.pl).",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#090a0f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`bp6-dark h-dvh ${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="bp6-dark h-dvh w-full overflow-hidden bg-[oklch(0.10_0.005_260)] text-[#f8fafc] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

