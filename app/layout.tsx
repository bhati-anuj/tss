import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Stellar School - Excellence in Education",
  description:
    "At The Stellar School, every child is encouraged to discover their inner brilliance and rise to their fullest potential.",
  generator: "backnode.com",
  icons: {
    icon: [
      {
        url: "/tss-logo-white.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/tss-logo-white.svg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/tss-logo.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/tss-logo-white.svg",
    // apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Rose:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
