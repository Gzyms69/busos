import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BusOS Palantir Foundry — Urban Intelligence Platform",
  description: "Ogólnopolska platforma analityki transportowej i wyceny grawitacji miejskiej",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="bp6-dark h-full" suppressHydrationWarning>
      <body className="bp6-dark h-full w-full overflow-hidden bg-[#111418] text-[#f6f7f9] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
