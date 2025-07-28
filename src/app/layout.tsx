import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Carbon Credit Thailand',
  description: 'ข้อมูลคาร์บอนเครดิตประเทศไทย',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  )
}
