import { ExternalLink } from "@/components/external-link"
import { site } from "@/content/site"

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-4xl flex-col gap-1 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-between">
        <p>Built by {site.name}</p>
        <ExternalLink
          href={site.repo}
          className="transition-colors hover:text-foreground"
        >
          See this site on GitHub ↗
        </ExternalLink>
      </div>
    </footer>
  )
}
