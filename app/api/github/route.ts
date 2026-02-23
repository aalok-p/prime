import { NextResponse } from "next/server"

const username = "aalok-p"
const baseUrl = "https://api.github.com"
const headers = {
  Accept: "application/vnd.github+json",
}
const pinnedRepos = [
  {
    id: 1,
    name: "meera_1",
    html_url: "https://github.com/11PRIMUS/meera_1",
    description: "MEERA - AI Companion",
    stargazers_count: 0,
    language: "TypeScript",
    updated_at: "2026-01-01T00:00:00Z",
  },
  {
    id: 2,
    name: "BrightWalkHackTU",
    html_url: "https://github.com/codeEnthusiast21/BrightWalkHackTU",
    description: "BrightWalk visual assistant",
    stargazers_count: 0,
    language: "Python",
    updated_at: "2026-01-01T00:00:00Z",
  },
  {
    id: 3,
    name: "SAR-image-Colorization",
    html_url: "https://github.com/11PRIMUS/SAR-image-Colorization",
    description: "SAR image Colorization",
    stargazers_count: 0,
    language: "Python",
    updated_at: "2026-01-01T00:00:00Z",
  },
  {
    id: 4,
    name: "Pratham",
    html_url: "https://github.com/11PRIMUS/Pratham",
    description: "Pratham",
    stargazers_count: 0,
    language: "Python",
    updated_at: "2026-01-01T00:00:00Z",
  },
]

export async function GET() {
  const userResponse = await fetch(`${baseUrl}/users/${username}`, {
    headers,
    next: { revalidate: 3600 },
  })

  if (!userResponse.ok) {
    return NextResponse.json(
      { error: "Failed to fetch GitHub user." },
      { status: userResponse.status }
    )
  }

  const user = await userResponse.json()

  return NextResponse.json({
    user: {
      name: user.name,
      login: user.login,
      avatar_url: user.avatar_url,
      html_url: user.html_url,
      public_repos: user.public_repos,
      followers: user.followers,
    },
    repos: pinnedRepos,
  })
}
