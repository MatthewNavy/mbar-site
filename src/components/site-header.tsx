"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { nav, site } from "@/content/site"

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href)
}

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          <span aria-hidden className="text-prompt">
            ~/
          </span>
          {site.name.toLowerCase().replace(" ", "-")}
        </Link>
        <nav aria-label="Main">
          <ul className="flex gap-7 text-sm">
            {nav.map(({ href, label }) => {
              const active = isActive(pathname, href)
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`relative ${
                      active
                        ? "text-accent"
                        : "text-muted transition-colors hover:text-foreground"
                    }`}
                  >
                    {active && (
                      <span aria-hidden className="absolute -left-3">
                        {">"}
                      </span>
                    )}
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
