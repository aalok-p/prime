"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import Link from "next/link"

const notes = [
  {
    title: "1. Sequence to Sequence models",
    href: "https://www.notion.so/1-seq2seq-26fdfea646b780779481fa1882a83863?source=copy_link",
    date: "15 sep 2025",
  },
  {
    title: "2. Attention mechanism from first principle",
    href: "https://www.notion.so/2-attention-25cdfea646b7805e83ebd2342d80b67c?source=copy_link",
    date: "15 sep 2025",
  },
  {
    title: "3. Transformers achitecture",
    href: "https://www.notion.so/3-transformer-258dfea646b780b8831fda7e8131d65c?source=copy_link",
    date: "15 sep 2025",
  },
  {
    title: "4. GPT block",
    href: "https://www.notion.so/4-gpt-block-281dfea646b7806b8cb5c537af0b3e31?source=copy_link",
    date: "16 sep 2025",
  },
  {
    title: "5. LLM Bechmark (Quality and Performance)",
    href:"https://www.notion.so/6-LLM-benchmark-25edfea646b78000b52ad88d973f2b61?source=copy_link",
    date: "16 sep 2025",
  },
  {
    title: "6. Batching",
    href: "https://www.notion.so/7-batching-255dfea646b78097ab68c7868f87eeb8?source=copy_link",
    date: "16 sep 2025",
  },
  {
    title: "7. Chunking startegies",
    href: "https://www.notion.so/8-Chunking-types-2b0dfea646b780298bcce70e645afe0c?source=copy_link",
    date: "17 sep 2025",
    description: "",
  },
]

export default function NotesPage() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false
    return window.localStorage.getItem("theme") === "dark"
  })

  useEffect(() => {
    window.localStorage.setItem("theme", isDark ? "dark" : "light")
  }, [isDark])

  return (
    <div
      className={`min-h-screen ${isDark ? "text-[#c8bca5]" : "bg-[#ece9cf] text-[#2f3134]"}`}
      style={
        isDark
          ? {
              backgroundColor: "#181d22",
              backgroundImage: "linear-gradient(180deg, #1b2128 0%, #171d22 100%)",
              backgroundSize: "100% 100%",
            }
          : undefined
      }
    >
      <main className="px-4 py-10 md:py-14">
        <div className="mx-auto max-w-5xl">
          <header className="space-y-9">
            <nav className={`flex items-center justify-between rounded-xl px-4 py-3 text-base ${isDark ? "bg-[#12171d] text-[#c8bca5]" : "text-[#64615b]"}`}>
              <div className="flex items-center gap-6">
                <Link href="/" className={`transition-colors ${isDark ? "hover:text-[#8ed26f]" : "hover:text-[#2f3134]"}`}>
                  Home
                </Link>
                <Link href="/notes" className={`transition-colors ${isDark ? "hover:text-[#8ed26f]" : "hover:text-[#2f3134]"}`}>
                  Notes
                </Link>
                <Link href="/blog" className={`transition-colors ${isDark ? "hover:text-[#8ed26f]" : "hover:text-[#2f3134]"}`}>
                  Blog
                </Link>
              </div>
              <button
                type="button"
                onClick={() => setIsDark((prev) => !prev)}
                className={`rounded-md p-1.5 transition-colors ${isDark ? "text-[#8ed26f] hover:bg-[#1d252d]" : "text-[#2f3134] hover:bg-[#e9e3c4]"}`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={14} /> : <Moon size={14} />}
              </button>
            </nav>
          </header>

          <div className="mt-8">
            <div className={`rounded-2xl border p-6 ${isDark ? "border-[#2e3a31] bg-[#1a2228]" : "border-[#c8cfac] bg-[#e6e3c7]"}`}>
              <h1 className="text-xl font-semibold">Notes</h1>
              <p className={`mt-3 text-lg ${isDark ? "text-[#c8bca5]" : "text-[#55524d]"}`}>some of my short notes to go through basics of ML and Inferencing.</p>
            </div>

            <ul className="mt-8 grid gap-x-16 gap-y-10 md:grid-cols-2">
              {notes.map((note) => (
                <li key={note.title}>
                  <a
                    href={note.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg leading-tight transition-colors ${isDark ? "text-[#e6dcc8] hover:text-[#8ed26f]" : "text-[#2f3134] hover:text-[#3f7f54]"}`}
                  >
                    {note.title}
                  </a>
                  <p className={`mt-1 text-base ${isDark ? "text-[#95a089]" : "text-[#3f3f39]"}`}>{note.date}</p>
                  {note.description && <p className={`mt-2 text-base ${isDark ? "text-[#c8bca5]" : "text-[#4f4f47]"}`}>{note.description}</p>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
