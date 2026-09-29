import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { PoemBody } from "@/components/poem-body"
import { getPoem, poems } from "@/content/poems"

export const dynamicParams = false

export function generateStaticParams() {
  return poems.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: PageProps<"/poetry/[slug]">): Promise<Metadata> {
  const { slug } = await params
  return { title: getPoem(slug)?.title }
}

export default async function PoemPage({
  params,
}: PageProps<"/poetry/[slug]">) {
  const { slug } = await params
  const index = poems.findIndex(poem => poem.slug === slug)
  if (index === -1) notFound()

  const poem = poems[index]
  const prev = poems[index - 1]
  const next = poems[index + 1]

  return (
    <article className="mx-auto max-w-2xl">
      <Link
        href="/poetry"
        className="text-sm text-muted transition-colors hover:text-accent"
      >
        ← all poems
      </Link>
      <h1 className="mt-6 mb-10 text-2xl font-bold tracking-tight sm:text-3xl">
        {poem.title}
      </h1>
      <PoemBody stanzas={poem.stanzas} />

      <nav
        aria-label="More poems"
        className="mt-16 flex justify-between gap-4 border-t border-border pt-6 text-sm"
      >
        {prev ? (
          <Link
            href={`/poetry/${prev.slug}`}
            className="text-muted transition-colors hover:text-accent"
          >
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            href={`/poetry/${next.slug}`}
            className="text-right text-muted transition-colors hover:text-accent"
          >
            {next.title} →
          </Link>
        )}
      </nav>
    </article>
  )
}
