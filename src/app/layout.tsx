import type { Metadata } from "next"
import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google"
import "./globals.css"
import Header from "../../components/header"
import Footer from "../../components/footer"
import { theme } from "@/lib/theme"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Borderless Craft",
  description: "High-quality digital worksheets for educators",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-[#F0F8FF] to-[#E6F3FF] overflow-x-hidden relative`}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FF9933] rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-1/2 -right-48 w-96 h-96 bg-[#28A745] rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-[#2196F3] rounded-full opacity-10 blur-3xl"></div>
        </div>
        <Header />
        <main className="relative z-10 container mx-auto px-4 mt-36 mb-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

