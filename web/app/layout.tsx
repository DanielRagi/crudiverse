import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Crudiverse',
  description: 'Simple CRUD guides for diverse technologies',
  icons: {
    icon: '/favicon.png',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
