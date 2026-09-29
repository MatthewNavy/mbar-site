export const site = {
  name: "Matthew Barton",
  description: "All things Matthew Barton :)",
  repo: "https://github.com/MatthewNavy/mbar-site",
}

export const nav = [
  { href: "/", label: "home" },
  { href: "/resume", label: "resume" },
  { href: "/poetry", label: "poetry" },
] as const

export type SocialIcon =
  "email" | "linkedin" | "github" | "instagram" | "spotify"

export const socials: { label: string; href: string; icon: SocialIcon }[] = [
  { label: "Email", href: "mailto:matthewrobbarton@gmail.com", icon: "email" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/matthewbartontx/",
    icon: "linkedin",
  },
  { label: "GitHub", href: "https://github.com/MatthewNavy", icon: "github" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/matthewbart0n/",
    icon: "instagram",
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/user/someguymatthew?si=La4-AJDESwOeEeuroyC_cg",
    icon: "spotify",
  },
]

export const secretLink = {
  label: "hehe",
  title: "Secret Link",
  href: "https://www.cs.trinity.edu/~mbarton/WebApps/",
}
