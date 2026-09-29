import type { Poem } from "@/content/poems"

/** Renders "plain {{hidden}} plain" with the braced segments picked out. */
function Line({ text }: { text: string }) {
  return text.split(/\{\{(.+?)\}\}/).map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-accent">
        {part}
      </span>
    ) : (
      part
    ),
  )
}

export function PoemBody({ stanzas }: Pick<Poem, "stanzas">) {
  return (
    <div className="space-y-7 leading-relaxed">
      {stanzas.map((stanza, i) => (
        <p key={i}>
          {stanza.map((line, j) => (
            <span key={j} className="block pl-6 -indent-6">
              <Line text={line} />
            </span>
          ))}
        </p>
      ))}
    </div>
  )
}
