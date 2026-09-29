import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404: Not found",
}

export default function NotFound() {
  return (
    <section className="py-16 text-center">
      <p className="mb-3 text-sm text-muted">
        <span className="text-prompt">$</span> cd {"<this route>"}
      </p>
      <h1 className="mb-4 text-3xl font-bold tracking-tight">404: Not Found</h1>
      <p className="mb-8 text-muted">
        You just hit a route that doesn&apos;t exist... good job!
      </p>
      <Link href="/" className="link">
        cd ~
      </Link>
    </section>
  )
}
