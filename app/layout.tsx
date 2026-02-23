import './globals.css'
import type { Metadata } from 'next'
import { Newsreader } from 'next/font/google'

const newsreader = Newsreader({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alok ',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={newsreader.className}>{children}</body>
    </html>
  )
}
