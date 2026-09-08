import type { Metadata } from "next";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="bp6-dark h-full" suppressHydrationWarning>
      <body className="bp6-dark h-full w-full overflow-hidden bg-[#090a0f] text-[#f8fafc] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

