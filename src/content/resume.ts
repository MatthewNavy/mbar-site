import type { StaticImageData } from "next/image"

import coinbase from "@/assets/logos/coinbase.svg"
import src from "@/assets/logos/src.png"
import trinity from "@/assets/logos/trinity.jpg"

export type Experience = {
  role: string
  emoji: string
  org: string
  href: string
  logo: StaticImageData
  dates: string
  summary: string
  tags: string[]
}

export const experience: Experience[] = [
  {
    role: "Software Engineer Intern",
    emoji: "🚀",
    org: "Coinbase",
    href: "https://coinbase.com",
    logo: coinbase,
    dates: "May - August 2021",
    summary:
      "Developed platform for internal tool frontends with custom OAuth 2.0 flow and CLI.",
    tags: ["Golang", "GraphQL", "Docker"],
  },
  {
    role: "Head ACM Tutor",
    emoji: "✏",
    org: "Trinity University",
    href: "https://trinity.edu",
    logo: trinity,
    dates: "August 2019 - Now",
    summary:
      "Helping other Trinity CS students with class material and assignments. Managing and promoting tutoring program.",
    tags: ["Scala", "C/C++", "Leadership"],
  },
  {
    role: "Software Engineer Intern",
    emoji: "⚔",
    org: "SRC",
    href: "https://srcinc.com",
    logo: src,
    dates: "May - August 2020",
    summary:
      "Maintained large-scale military application. Conducted feasibility study.",
    tags: ["Java", "Eclipse", "Research"],
  },
]

export const skills: { title: string; emoji: string; items: string[] }[] = [
  {
    title: "Languages",
    emoji: "💬",
    items: [
      "Java",
      "Python",
      "Scala",
      "JavaScript",
      "Golang",
      "C++",
      "PostreSQL",
      "Haskell",
    ],
  },
  {
    title: "Technologies",
    emoji: "💻",
    items: [
      "Git",
      "React",
      "Bootstrap",
      "REST APIs",
      "gRPC",
      "Docker",
      "Flutter",
      "Protobufs",
    ],
  },
  {
    title: "Concepts",
    emoji: "💡",
    items: [
      "Web Development",
      "Machine Learning",
      "Agile",
      "Databases",
      "Game Theory",
      "Object Orientation",
      "Data Structures",
      "Algorithms",
    ],
  },
]

export const education = {
  school: "Trinity University",
  emoji: "🏫",
  location: "San Antonio, TX",
  dates: "2018-2022",
  details: [
    {
      label: "Areas of Study",
      value: "Computer Science major (BS), Mathematics minor",
    },
    {
      label: "Grades",
      value: "3.73 Cumulative GPA, 3.81 Department GPA, graduated cum laude",
    },
    { label: "Awards", value: "Dean's List x4, Trustees' Scholarship" },
    {
      label: "Involvement",
      value:
        "ACM Chapter Vice President, Recruitment Volunteer, Intramural Basketball",
    },
  ],
}
