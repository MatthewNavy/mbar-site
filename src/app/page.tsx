import Image from "next/image"

import portrait from "@/assets/mbarton.jpg"
import { ExternalLink } from "@/components/external-link"
import { Heading } from "@/components/heading"
import { SocialLinks } from "@/components/social-links"
import { about, intro, reachOut } from "@/content/home"
import { secretLink } from "@/content/site"

export default function Home() {
  return (
    <>
      <section className="grid items-center gap-8 md:grid-cols-[1fr_16rem] md:gap-10">
        <div>
          <p className="mb-3 text-sm text-muted">
            <span className="text-prompt">$</span> whoami
          </p>
          <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Hello, world!
            <span aria-hidden className="ml-1 cursor-blink text-accent">
              _
            </span>
          </h1>
          <p className="leading-relaxed text-muted">{intro}</p>
        </div>
        <Image
          src={portrait}
          alt="Portrait of Matthew Barton"
          placeholder="blur"
          preload
          sizes="(min-width: 768px) 16rem, 7rem"
          className="order-first aspect-square w-28 rounded-xl border border-border object-cover md:order-none md:w-full"
        />
      </section>

      <Heading>About Me</Heading>
      <div className="space-y-5 leading-relaxed">
        {about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <Heading level={3}>Ways to Reach Me</Heading>
      <p className="mb-6 leading-relaxed">{reachOut}</p>
      <SocialLinks />
      <p className="mt-6 text-center text-xs">
        <ExternalLink
          href={secretLink.href}
          title={secretLink.title}
          className="text-muted/60 transition-colors hover:text-accent"
        >
          {secretLink.label}
        </ExternalLink>
      </p>
    </>
  )
}
