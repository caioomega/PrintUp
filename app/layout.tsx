import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

export const metadata: Metadata = {
  title: "Print UP | Sublimação Personalizada para Festas | Copos, Taças & Baldes",
  description:
    "Personalize copos, taças e baldes para suas festas. Sublimação premium, entrega rápida. Orçamento grátis!",
  keywords: ["sublimação", "copos personalizados", "taças personalizadas", "festa", "personalização"],
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${geist.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
