import type { Metadata } from "next"
import Link from "next/link"

import { externalPoems, poems } from "@/content/poems"

export const metadata: Metadata = {
  title: "Poetry",
}

const itemClass =
  "group flex items-baseline gap-4 py-4 transition-colors hover:text-accent"

export default function Poetry() {
  return (
    <>
      <h1 className="mb-8 text-3xl font-bold tracking-tight">Poetry</h1>
      <ol className="divide-y divide-border border-y border-border">
        {poems.map((poem, i) => (
          <li key={poem.slug}>
            <Link href={`/poetry/${poem.slug}`} className={itemClass}>
              <span className="text-sm text-muted tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              {poem.title}
            </Link>
          </li>
        ))}
        {externalPoems.map(poem => (
          <li key={poem.href}>
            <a
              href={poem.href}
              target="_blank"
              rel="noopener noreferrer"
              className={itemClass}
            >
              <span aria-hidden className="text-sm text-muted">
                ↗
              </span>
              {poem.title}
            </a>
          </li>
        ))}
      </ol>
    </>
  )
}
