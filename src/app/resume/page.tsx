import type { Metadata } from "next"
import Image from "next/image"

import { Heading } from "@/components/heading"
import { education, experience, skills } from "@/content/resume"

export const metadata: Metadata = {
  title: "Resume",
}

export default function Resume() {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight">Resume</h1>

      <Heading>Experience</Heading>
      <ul className="grid gap-5 md:grid-cols-3">
        {experience.map(job => (
          <li
            key={job.org + job.dates}
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface"
          >
            <a
              href={job.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-28 items-center justify-center bg-white p-6"
            >
              <Image
                src={job.logo}
                alt={`${job.org} logo`}
                className="max-h-full w-auto object-contain"
              />
            </a>
            <div className="flex flex-1 flex-col gap-3 border-t border-border p-5">
              <p className="text-xs text-muted">{job.dates}</p>
              <h3 className="font-semibold">
                {job.role} <span aria-hidden>{job.emoji}</span>
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-muted">
                {job.summary}
              </p>
              <ul className="flex flex-wrap gap-2 text-xs">
                {job.tags.map(tag => (
                  <li
                    key={tag}
                    className="rounded border border-border px-2 py-0.5 text-accent"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>

      <Heading>Skills</Heading>
      <div className="grid gap-5 sm:grid-cols-3">
        {skills.map(group => (
          <section
            key={group.title}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <h3 className="mb-3 font-semibold">
              {group.title} <span aria-hidden>{group.emoji}</span>
            </h3>
            <ul className="space-y-1.5 text-sm text-muted">
              {group.items.map(item => (
                <li key={item}>
                  <span aria-hidden className="mr-2 text-prompt">
                    ›
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <Heading>Education</Heading>
      <section className="rounded-xl border border-border bg-surface">
        <div className="flex flex-wrap items-start justify-between gap-2 border-b border-border p-5">
          <div>
            <h3 className="font-semibold">
              {education.school} <span aria-hidden>{education.emoji}</span>
            </h3>
            <p className="text-sm text-muted">{education.location}</p>
          </div>
          <p className="text-sm font-semibold">{education.dates}</p>
        </div>
        <dl className="divide-y divide-border">
          {education.details.map(({ label, value }) => (
            <div
              key={label}
              className="grid gap-1 p-5 text-sm sm:grid-cols-[10rem_1fr]"
            >
              <dt className="font-semibold">{label}</dt>
              <dd className="text-muted">{value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  )
}
