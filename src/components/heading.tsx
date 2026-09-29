import type { ReactNode } from "react"

/** Markdown-style section heading, e.g. "## About Me". */
export function Heading({
  level = 2,
  children,
}: {
  level?: 2 | 3
  children: ReactNode
}) {
  const Tag = `h${level}` as const
  return (
    <Tag
      className={
        level === 2
          ? "mt-14 mb-5 text-xl font-semibold"
          : "mt-10 mb-4 text-lg font-semibold"
      }
    >
      <span aria-hidden className="mr-2 text-prompt select-none">
        {"#".repeat(level)}
      </span>
      {children}
    </Tag>
  )
}
