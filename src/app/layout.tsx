import type { Metadata } from "next";
import { Chakra_Petch } from 'next/font/google'
import "./globals.css";

const chakra = Chakra_Petch({
  subsets: ['thai'],
  weight: ['400', '700'],
  display: 'swap',
})

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
      <body className={chakra.className}>{children}</body>
    </html>
  )
}
