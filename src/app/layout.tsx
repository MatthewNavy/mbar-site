import type { Metadata } from "next"
import { Source_Code_Pro } from "next/font/google"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { site } from "@/content/site"

import "./globals.css"

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${site.name}`,
    default: site.name,
  },
  description: site.description,
  openGraph: {
    siteName: site.name,
    type: "website",
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sourceCodePro.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <SiteHeader />
        <main className="mx-auto w-full max-w-4xl flex-1 px-4 pt-12 sm:pt-16">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
