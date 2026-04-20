import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trivia Buddy',
  description: 'Your AI teammate for pub trivia night',
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
