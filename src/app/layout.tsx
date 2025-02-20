import type { Metadata } from 'next'
import './globals.css'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'Super Spray',
  description: 'Spray ether or tokens to multiple addresses.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
