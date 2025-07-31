import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'القمة الفانونية',
  description: 'created by zain',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: "Tajawal", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  --font-sans: "Tajawal", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  --font-mono: "Tajawal", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
