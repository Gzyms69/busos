import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fontHeading = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const fontBody = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const fontMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "latin-ext"],
  display: "swap",
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
  viewportFit: "cover",
  themeColor: "#090a0f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`bp6-dark h-dvh ${fontHeading.variable} ${fontBody.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className="bp6-dark h-dvh w-full overflow-hidden bg-[oklch(0.10_0.005_260)] text-[#f8fafc] font-sans antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

