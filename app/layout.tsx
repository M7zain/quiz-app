import type { Metadata } from 'next'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { BottomNav } from '@/components/bottom-nav'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'القمة القانونية',
  description: 'created by Zoudne',
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
      <body className="font-arabic pb-16">
        <SiteHeader />
        <main className="relative">{children}</main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  )
}
