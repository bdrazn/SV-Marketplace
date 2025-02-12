import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Student-Vendor Marketplace",
  description: "A marketplace for students to find and book services from vendors",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  )
}



import './globals.css'