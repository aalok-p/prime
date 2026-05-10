"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import Link from "next/link"

const blogPosts: Array<{ title: string; href: string; date: string; description?: string }> = [
  {
    title: "Watcher - GPU health coach",
    href: "https://open.substack.com/pub/aaloklogs/p/watcher-gpu-health-coach?r=6rls0n&utm_campaign=post&utm_medium=web",
    date: "05 apr 2026",
    description:
      "we all have this question Why is my GPU stuttering? Every developer and gamer has asked this at 2 AM. You check nvidia-smi, see raw numbers like 82°C, 87% utilization, and 9.2GB VRAM, but you have no idea if that is critical or fine. You are left Googling while your training crawls or your game lags. nvidia-smi gives you data. Watcher gives you answers. Instead of: VRAM: 91% and a red alert",
  },
  {
    title: "The new way to witness OCR: DeepSeek OCR",
    href: "https://aaloklogs.substack.com/p/deepseek-ocr",
    date: "02 nov 2025",
    description:"DeepSeek released something that’s about to reshape how we handle documents in AI. It’s not another model it’s a complete rethink of Optical Character Recognition (OCR). DeepSeek has once again set the AI world buzzing with its new model, DeepSeek-OCR, they always comes and drop a banger and we wait to know what they are cooking from past few months.",
  },
]

export default function BlogPage() {
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
                <Link href="/" className={`transition-colors ${isDark ? "hover:text-[#8ed26f]" : "hover:text-[#2f3134]"}`}>Home</Link>
                <Link href="/notes" className={`transition-colors ${isDark ? "hover:text-[#8ed26f]" : "hover:text-[#2f3134]"}`}>Notes</Link>
                <Link href="/blog" className={`transition-colors ${isDark ? "hover:text-[#8ed26f]" : "hover:text-[#2f3134]"}`}>Blog</Link>
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
            <div className={`rounded-xl border p-6 ${isDark ? "border-[#2e3a31] bg-[#1a2228]" : "border-[#c8cfac] bg-[#e6e3c7]"}`}>
              <h1 className={`mt-2 text-xl font-semibold ${isDark ? "text-[#e6dcc8]" : "text-[#2f3134]"}`}>
                Blog
              </h1>
              <p className={`mt-3 text-lg ${isDark ? "text-[#c8bca5]" : "text-[#64615b]"}`}>
                you can get the good logs about ml paper, paper breakdown, paper implementation.
              </p>
              <a
                href="https://aaloklogs.substack.com/"
                className={`mt-5 inline-flex items-center rounded-lg border px-4 py-2 text-lg transition-colors ${isDark ? "border-[#8ed26f] text-[#8ed26f] hover:bg-[#12181d]" : "border-[#3f7f54] text-[#2f7a49] hover:bg-[#dce7ca]"}`}
              >
                subscribe to newsletter <span className="ml-2">→</span>
              </a>
            </div>

            <ul className="mt-8 grid gap-x-16 gap-y-10 md:grid-cols-2">
              {blogPosts.map((post) => (
                <li key={post.title}>
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg leading-tight transition-colors ${isDark ? "text-[#e6dcc8] hover:text-[#8ed26f]" : "text-[#2f3134] hover:text-[#3f7f54]"}`}
                  >
                    {post.title}
                  </a>
                  <p className={`mt-1 text-base ${isDark ? "text-[#95a089]" : "text-[#3f3f39]"}`}>{post.date}</p>
                  {post.description && <p className={`mt-2 text-base ${isDark ? "text-[#c8bca5]" : "text-[#4f4f47]"}`}>{post.description}</p>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
