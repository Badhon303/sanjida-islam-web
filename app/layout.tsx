import React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import Navbar from "./components/Navbar"
import SiteFooter from "./components/SiteFooter"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "Sanjida Islam — Political Portfolio",
    template: "%s | Sanjida Islam",
  },
  description:
    "Official political portfolio of Sanjida Islam — vision, programs, blog, and contact.",
  openGraph: {
    title: "Sanjida Islam — Political Portfolio",
    description:
      "Official political portfolio of Sanjida Islam — vision, programs, blog, and contact.",
    // url: 'https://example.com/',
    siteName: "Sanjida Islam Portfolio",
    images: [
      { url: "/next.svg", width: 1200, height: 630, alt: "Sanjida Islam" },
    ],
    locale: "en_US",
    type: "website",
  },
  // metadataBase: new URL('https://example.com'),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180" },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${poppins.className} bg-white text-slate-900 antialiased `}
        suppressHydrationWarning
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
