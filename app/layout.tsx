import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "Rustam Salavatov - AI Agent Developer",
  description:
    "CTO & AI Engineer specializing in multi-agent systems, generative AI, and creative automation. SuperDuperAI founder.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable} dark`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
