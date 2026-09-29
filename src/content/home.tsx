import type { ReactNode } from "react"

import { ExternalLink } from "@/components/external-link"

export const intro: ReactNode =
  "However you stumbled upon this page, welcome! This is my personal website. If you wish to know more about me, I encourage you to keep reading below and check out the tabs above. Hopefully this site will give you some insight into Matthew Barton the developer and maybe Matthew Barton the human as well."

export const about: ReactNode[] = [
  <>
    I am a software engineer at{" "}
    <ExternalLink href="https://www.coinbase.com">Coinbase</ExternalLink> in New
    York City. I am very excited to contribute to the crypto space and be a part
    of this large shift in how we store value. I studied Computer Science and
    Mathematics at{" "}
    <ExternalLink href="https://www.trinity.edu/">
      Trinity University
    </ExternalLink>{" "}
    in San Antonio, Texas. I am originally from Cypress, Texas, just outside of
    Houston.
  </>,
  <>
    I started my coding journey back in 2015 when I registered for Computer
    Programming 1 during my sophomore year at Cypress Woods High School (212,
    CDUB). There, I printed hello world, created Scratch games and started
    learning Python under some awesome teachers. After that, it has been a
    non-stop road of learning and delight. I have picked up many languages,
    platforms, and technologies along the way making each step more exciting
    than the last. Right now, my favorite language to use is Dart, though
    it&apos;s not very useful outside of{" "}
    <ExternalLink href="https://flutter.dev/">Flutter</ExternalLink>.
  </>,
  <>
    In the marginal free time afforded to me, I enjoy everything basketball:
    watching the NBA, running pick-up games, playing NBA2K. I also watch some
    football when I can. I am a huge fan of the San Antonio Spurs and LA
    Chargers. To fill my creative needs, I try to write poetry here and there.
    You can find some of my work in the tab above.
  </>,
]

export const reachOut: ReactNode =
  "I'll share some professional and personal links below if you want to explore more about me. You can reach out to me via email which I keep at inbox zero."
