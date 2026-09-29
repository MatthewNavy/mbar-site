import type { ComponentProps } from "react"

export function ExternalLink({
  className = "link",
  ...props
}: ComponentProps<"a">) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    />
  )
}
