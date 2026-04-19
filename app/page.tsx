"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type GithubRepo = {
  id: number
  name: string
  html_url: string
  description: string | null
  stargazers_count: number
  language: string | null
  updated_at: string
}

type GithubData = {
  user: {
    name: string | null
    login: string
    avatar_url: string
    html_url: string
    public_repos: number
    followers: number
  }
  repos: GithubRepo[]
}

export default function Page() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false
    return window.localStorage.getItem("theme") === "dark"
  })
  const [githubData, setGithubData] = useState<GithubData | null>(null)
  const [githubError, setGithubError] = useState<string | null>(null)

  useEffect(() => {
    window.localStorage.setItem("theme", isDark ? "dark" : "light")
  }, [isDark])

  useEffect(() => {
    let active = true
    const loadGithub = async () => {
      try {
        const response = await fetch("/api/github")
        if (!response.ok) {
          throw new Error("Failed to load GitHub data.")
        }
        const data = (await response.json()) as GithubData
        if (active) {
          setGithubData(data)
        }
      } catch (error) {
        if (active) {
          setGithubError(
            error instanceof Error ? error.message : "Failed to load GitHub data."
          )
        }
      }
    }
    loadGithub()
    return () => {
      active = false
    }
  }, [])

  return (
    <div
      className={`min-h-screen ${isDark ? "text-[#c8bca5]" : "bg-[#f8f4d6] text-[#2f3134]"}`}
      style={
        isDark
          ? {
              backgroundColor: "#181d22",
              backgroundImage:
                "linear-gradient(180deg, #1b2128 0%, #171d22 100%)",
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
            <div className="flex items-center gap-5">
            <Image
              src="/nagi-hq.png"
              alt="Alok "
              width={112}
              height={112}
              quality={100}
              unoptimized
              priority
              sizes="56px"
              className="h-14 w-14 rounded-full border border-[#cfceb5] object-cover"
            />
            <h1 className="text-3xl md:text-4xl font-semibold">Alok</h1>
            </div>
        </header>

        <div className="mt-10 space-y-8">
          <section className="grid gap-4 md:grid-cols-[1.2fr,0.8fr]">
            <div className="p-1">
              <p className={`mt-2 text-lg ${isDark ? "text-[#c8bca5]" : "text-[#64615b]"}`}>
                I enjoy turning research into friendly tools, from agent workflows to applied ML systems, and I love
                reading more about tranformers, LLM training and inference optimization .
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-base">
                <a href="https://github.com/aalok-p" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 transition-colors ${isDark ? "text-[#8ed26f] hover:text-[#a4de8a]" : "text-blue-600 hover:text-blue-700"}`}>
                  GitHub <span aria-hidden="true">↗</span>
                </a>
                <a href="https://www.linkedin.com/in/11alok/" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 transition-colors ${isDark ? "text-[#8ed26f] hover:text-[#a4de8a]" : "text-blue-600 hover:text-blue-700"}`}>
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
                <a href="https://www.kaggle.com/primus11" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 transition-colors ${isDark ? "text-[#8ed26f] hover:text-[#a4de8a]" : "text-blue-600 hover:text-blue-700"}`}>
                  Kaggle <span aria-hidden="true">↗</span>
                </a>
                <a href="https://drive.google.com/file/d/1wmuI4PQagkfBn9kczkMjtX8eyHBJQljI/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 transition-colors ${isDark ? "text-[#8ed26f] hover:text-[#a4de8a]" : "text-blue-600 hover:text-blue-700"}`}>
                  Resume <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <div className={`rounded-2xl p-6 shadow-sm ${isDark ? "border border-[#2e3a31] bg-[#1a2228]" : "border border-[#cfceb5] bg-[#f5f5dc]"}`}>
              <p className={`text-xs uppercase tracking-[0.3em] ${isDark ? "text-[#8ed26f]" : "text-[#8c8779]"}`}>Highlights</p>
              <div className="mt-4 grid gap-3">
                <div className={`flex items-center justify-between rounded-xl px-4 py-3 ${isDark ? "border border-[#2e3a31] bg-[#12181d]" : "border border-[#c1bda7] bg-[#f3efd5]"}`}>
                  <span className={`text-base ${isDark ? "text-[#c8bca5]" : "text-[#8c8779]"}`}>Public repos</span>
                  <span className={`text-lg font-semibold ${isDark ? "text-[#e6dcc8]" : "text-[#2f3134]"}`}>
                    {githubData ? githubData.user.public_repos : "—"}
                  </span>
                </div>
                <div className={`flex items-center justify-between rounded-xl px-4 py-3 ${isDark ? "border border-[#2e3a31] bg-[#12181d]" : "border border-[#c1bda7] bg-[#f3efd5]"}`}>
                  <span className={`text-base ${isDark ? "text-[#c8bca5]" : "text-[#8c8779]"}`}>Followers</span>
                  <span className={`text-lg font-semibold ${isDark ? "text-[#e6dcc8]" : "text-[#2f3134]"}`}>
                    {githubData ? githubData.user.followers : "—"}
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className={`rounded-2xl p-6 shadow-sm ${isDark ? "border border-[#2e3a31] bg-[#1a2228]" : "border border-[#cfceb5] bg-[#f5f5dc]"}`}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className={`mt-2 text-2xl font-semibold ${isDark ? "text-[#e6dcc8]" : "text-[#2f3134]"}`}>projects & activity</h2>
                <p className={`mt-1 text-base ${isDark ? "text-[#c8bca5]" : "text-[#64615b]"}`}>
                  pinned repositories for{" "}
                  <span className={`font-medium ${isDark ? "text-[#e6dcc8]" : "text-[#2f3134]"}`}>
                    {githubData?.user.login ?? "aalok-p"}
                  </span>
                  .
                </p>
              </div>
              {githubData?.user.avatar_url && (
                <a
                  href={githubData.user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 rounded-full px-4 py-2 text-base transition-colors ${isDark ? "border border-[#2e3a31] bg-[#12181d] text-[#c8bca5] hover:text-[#8ed26f]" : "border border-[#c1bda7] bg-[#f3efd5] text-[#64615b] hover:text-[#2f3134]"}`}
                >
                  <Image
                    src={githubData.user.avatar_url}
                    alt={`${githubData.user.login} avatar`}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full border border-[#cfceb5]"
                  />
                  <span>here I am</span>
                </a>
              )}
            </div>
            {githubError && <p className="mt-4 text-base text-rose-600">{githubError}</p>}
            {!githubError && !githubData && (
              <p className={`mt-4 text-base ${isDark ? "text-[#95a089]" : "text-[#8c8779]"}`}>getting there...</p>
            )}
            {githubData && (
              <ul className="mt-6 grid gap-4 md:grid-cols-2">
                {githubData.repos.map((repo) => (
                  <li key={repo.id} className={`rounded-xl p-4 ${isDark ? "border border-[#2e3a31] bg-[#12181d]" : "border border-[#d8d4be] bg-[#f8f4d6]"}`}>
                    <div className="flex items-start justify-between gap-3">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-semibold transition-colors ${isDark ? "text-[#e6dcc8] hover:text-[#8ed26f]" : "text-[#2f3134] hover:text-[#7b6f57]"}`}
                      >
                        {repo.name}
                      </a>
                      <span className={`text-xs ${isDark ? "text-[#95a089]" : "text-[#a7a995]"}`}>★ {repo.stargazers_count}</span>
                    </div>
                    <p className={`mt-2 text-base ${isDark ? "text-[#c8bca5]" : "text-[#64615b]"}`}>
                      {repo.description || "No description provided yet."}
                    </p>
                    <div className={`mt-3 flex items-center gap-3 text-xs ${isDark ? "text-[#95a089]" : "text-[#a7a995]"}`}>
                      {repo.language && <span>{repo.language}</span>}
                      <span>Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>
          <section>
            <h2 className={`text-2xl font-semibold ${isDark ? "text-[#e6dcc8]" : "text-[#2f3134]"}`}>Experience</h2>
            <ul className={`mt-4 space-y-3 ${isDark ? "text-[#c8bca5]" : "text-[#64615b]"}`}>
              <li className={`border-l-2 pl-4 transition-colors ${isDark ? "border-[#2e3a31] hover:border-[#8ed26f]" : "border-[#cfceb5] hover:border-[#8c8779]"}`}>
                <span className={`font-medium ${isDark ? "text-[#e6dcc8]" : "text-[#2f3134]"}`}>Machine Learning Intern</span> @ AlaricTech{" "}
                <span className={`text-lg ${isDark ? "text-[#95a089]" : "text-[#8c8779]"}`}>[oct 25&apos; - dec 25&apos;]</span>
              </li>
              <li className={`border-l-2 pl-4 transition-colors ${isDark ? "border-[#2e3a31] hover:border-[#8ed26f]" : "border-[#cfceb5] hover:border-[#8c8779]"}`}>
                <span className={`font-medium ${isDark ? "text-[#e6dcc8]" : "text-[#2f3134]"}`}>AR Developer</span> @ GDG KIET{" "}
                <span className={`text-lg ${isDark ? "text-[#95a089]" : "text-[#8c8779]"}`}>[jan 24&apos; - jan 25&apos;]</span>
              </li>
              <li className={`border-l-2 pl-4 transition-colors ${isDark ? "border-[#2e3a31] hover:border-[#8ed26f]" : "border-[#cfceb5] hover:border-[#8c8779]"}`}>
                <span className={`font-medium ${isDark ? "text-[#e6dcc8]" : "text-[#2f3134]"}`}>Intern</span> @ TBI KIET{" "}
                <span className={`text-lg ${isDark ? "text-[#95a089]" : "text-[#8c8779]"}`}>[may 24&apos; - june 24&apos;]</span>
              </li>
              <li className={`border-l-2 pl-4 transition-colors ${isDark ? "border-[#2e3a31] hover:border-[#8ed26f]" : "border-[#cfceb5] hover:border-[#8c8779]"}`}>
                <span className={`font-medium ${isDark ? "text-[#e6dcc8]" : "text-[#2f3134]"}`}>Gaudmire</span> @ buildspace{" "}
                <span className={`text-lg ${isDark ? "text-[#95a089]" : "text-[#8c8779]"}`}>[may 24&apos; - july 24&apos;]</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className={`text-2xl font-semibold ${isDark ? "text-[#e6dcc8]" : "text-[#2f3134]"}`}>Projects</h2>
            <ul className={`mt-4 space-y-4 ${isDark ? "text-[#c8bca5]" : "text-[#64615b]"}`}>
              <li>
                <a
                  href="https://aaloksan-kernel.hf.space/ui/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-semibold transition-colors ${isDark ? "text-[#e6dcc8] hover:text-[#8ed26f]" : "text-[#2f3134] hover:text-[#7b6f57]"}`}
                >
                  Kernel Writer
                </a>
                <ul className="mt-1 text-base">
                  <li>converts raw cuda kernel code into peak perfoming CUDA kernel code across training epsidoes.</li>
                  <li>grading framework with rule-based check for RL agent with weighted reward calculation. </li>
                </ul>
              </li>
              <li>
                <a
                  href="https://github.com/aalok-p/watcher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-semibold transition-colors ${isDark ? "text-[#e6dcc8] hover:text-[#8ed26f]" : "text-[#2f3134] hover:text-[#7b6f57]"}`}
                >
                  Watcher - GPU Visualizer 
                </a>
                <ul className="mt-1 text-base">
                  <li>built for linux to visualize GPU usage (VRAM, Temperature, Gpu util and Power).</li>
                  <li>diagnoses bottlenecks, and explains fixes in plain English.</li>
                </ul>
              </li>
              <li>
                <a
                  href="https://www.meera.social/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-semibold transition-colors ${isDark ? "text-[#e6dcc8] hover:text-[#8ed26f]" : "text-[#2f3134] hover:text-[#7b6f57]"}`}
                >
                  MEERA - AI Companion
                </a>
                <ul className="mt-1 text-base">
                  <li>it isn&apos;t just another chatbot. It&apos;s an emotional companion made to truly listen and remembers about user.</li>
                  <li>uses fine tunned Qwen3-32B with qlora adapters for empathetic dialogue.</li>
                </ul>
              </li>
              <li>
                <a
                  href="https://github.com/aalok-p/SAR-image-Colorization"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-semibold transition-colors ${isDark ? "text-[#e6dcc8] hover:text-[#8ed26f]" : "text-[#2f3134] hover:text-[#7b6f57]"}`}
                >
                  SAR image Colorization
                </a>
                <ul className="mt-1 text-base">
                  <li>uses conditional GAN combining a ResUNet generator and PatchGAN discrimator to convert noisy sar(grey) images into colored rgb images.</li>
                  <li>have multi-term objective (L1 reconstruction loss with weight 100) to stabilize supervised SAR–RGB translation.</li>
                </ul>
              </li>
              <li>
                <a
                  href="https://github.com/aalok-p/Pratham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-semibold transition-colors ${isDark ? "text-[#e6dcc8] hover:text-[#8ed26f]" : "text-[#2f3134] hover:text-[#7b6f57]"}`}
                >
                  Pratham
                </a>
                <ul className="mt-1 text-base">
                  <li>a custom CNN to classify MRI scans for brain tumor detection with high accuracy.</li>
                  <li>integrated grad-cam visualizer for easier interpretion, with 2d-1d transformation pipeline.</li>
                </ul>
              </li>
              <li>
                <a
                  href="https://github.com/Avdhesh-Varshney/AI-Code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-semibold transition-colors ${isDark ? "text-[#e6dcc8] hover:text-[#8ed26f]" : "text-[#2f3134] hover:text-[#7b6f57]"}`}
                >
                  AI-Code
                </a>
                <p className="mt-1 text-base">an open-source project designed to help individuals learn and understand fundamental code implementations of various AI algorithms</p>
              </li>
            </ul>
          </section>

          <section className="space-y-8">
            <div>
              <h2 className={`text-2xl font-semibold ${isDark ? "text-[#e6dcc8]" : "text-[#2f3134]"}`}>things I am learning</h2>
              <p className={`mt-2 text-base ${isDark ? "text-[#c8bca5]" : "text-[#64615b]"}`}>
                you will find me learning LLM training, inference optimization and a lot of kernel code, also learning about what a frontier labs require, If I am not learning and creating then you can find me in 9-5 lec    (ps- sed emoji).
              </p>
            </div>
            <div>
              <h2 className={`text-2xl font-semibold ${isDark ? "text-[#e6dcc8]" : "text-[#2f3134]"}`}>let&apos;s connect</h2>
              <p className={`mt-2 text-base ${isDark ? "text-[#c8bca5]" : "text-[#64615b]"}`}>
                <a
                  href="mailto:alok28pa@gmail.com"
                  className={`${isDark ? "text-[#8ed26f]" : "text-blue-600"} underline underline-offset-2`}
                >
                  email
                </a>{" "}
                or{" "}
                <a
                  href="https://x.com/the_neuralgeek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDark ? "text-base text-[#8ed26f]" : "text-blue-600"} underline underline-offset-2`}
                >
                  X
                </a>{" "}
                work best for me; I&apos;ll get back to you as soon as I can.
              </p>
              <p className={`mt-2 text-base ${isDark ? "text-[#c8bca5]" : "text-[#64615b]"}`}>
                Hmm... what else?
              </p>
              <p className={`mt-2 text-base ${isDark ? "text-[#c8bca5]" : "text-[#64615b]"}`}>
                You can also check out my{" "}
                <a
                  href="#"
                  className={`${isDark ? "text-base text-[#8ed26f]" : "text-blue-600"} underline underline-offset-2`}
                >
                  blog
                </a>{" "}
                for project updates and worklogs, or just throw me a message on the aforementioned links if you wanna chat about stuff :)
              </p>
            </div>
          </section>
        </div>
        </div>
      </main>
    </div>
  )
}
