# mbar-site

My personal website, built with [Next.js](https://nextjs.org/) (App Router), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/). Hosted on [Vercel](https://vercel.com/).

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
npm run format
```

## Editing content

All copy lives in `src/content/`, separate from the components:

- `site.ts`: name, nav, social links
- `home.tsx`: home page paragraphs
- `resume.ts`: experience, skills, education
- `poems.ts`: poems (each is a list of stanzas; wrap words in `{{double braces}}` to highlight them)

Adding a poem to `poems.ts` automatically creates its `/poetry/<slug>` page.
