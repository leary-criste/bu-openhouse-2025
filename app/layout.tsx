import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profile Contact Cards',
  description: 'React + Tailwind UI templates for Profile Contact Card system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
