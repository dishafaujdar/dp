import { tr } from 'framer-motion/client'
import { TimelineEntry } from './ui/TimelineEntry'

const projects = [
  {
    title: 'Tunespace',
    date: '2026',
    description: "Built a platform-agnostic synchronized music listening app where users drop into a shared room via link and listen together in real-time — no account required. Build a sync engine: a drift-correction system that computes true playback position accounting for network latency, then applies soft corrections via playback rate manipulation rather than jarring hard seeks. Unified a single IPlayer interface across YouTube, Spotify, and SoundCloud SDKs, each with wildly different APIs, into one coherent abstraction. Built on Next.js with WebSocket server since App Router doesn't support persistent connections natively.",
    badge: 'New',
    boxed: true,
    href: 'https://github.com/dishafaujdar/Tunespace',
  },
  {
    title: 'feat: Implement episodic memory layer and experiment gating with LLM resolution',
    date: '2026',
    description: 'Built a persistent memory layer for autoresearch by karpathy — an autonomous ML research agent that runs hundreds of experiments overnight. The problem: the agent rediscovers the same dead ends every run. No memory of what it already tried.The architecture is directly inspired by CoALA (Sumers et al. 2023) — episodic memory for autonomous research agents.',
    // badge: 'New',
    boxed: false,
    href: 'https://github.com/karpathy/autoresearch/pull/341',
  },
  {
    title: 'Fillit',
    date: '2026',
    description: 'Fillit is a job application autofill system: a Next.js dashboard to manage your profile and resumes, a Chrome extension that fills application forms using a native setter strategy cascade, and a Node/Express API with PostgreSQL.',
    // badge: 'New',
    boxed: false,
    href: 'https://github.com/dishafaujdar/fillIt',
  },
  {
    title: 'WikiMind - RAG',
    date: '2026',
    description:
      'WikiMind — full-stack RAG system where users upload PDFs and chat with their documents. Built adaptive retrieval hybrid BM25 + reranking based on corpus size, hierarchical chunking, streaming responses, used async pipelines, redis and bull.js for queuing and background jobs, and end-to-end observability via Langfuse.',
    badge: 'New',
    boxed: false,
    href: 'https://github.com/dishafaujdar/WikiMind-RAG',
  },
  {
    title: 'Synthesia — AI Research Agent',
    date: '2025',
    description:
      'AI Research Agent that accepts a topic, runs a small research workflow, and returns a structured result. Tech: TypeScript, Redis, Bull.js, Express, PostgreSQL.',
    // badge: 'New',
    boxed: false,
    href: 'https://github.com/dishafaujdar/Synthesia',
  },
  {
    title: 'OSS-Align',
    date: '2025',
    description:
      'Conservative decision system matching developers with realistic open-source contribution opportunities. Analyzes proven work history and matches with contributor-friendly repos. Tech: Python, Typer, Rich, GitHub API, Sentence Transformers, FAISS, LLMs.',
    // badge: 'New',
    boxed: false,
    href: 'https://github.com/dishafaujdar/os-agent',
  },
  {
    title: 'Mnemo',
    date: '2026',
    description: 'A production-grade memory middleware REST API for AI agents. Mnemo gives stateless LLMs (GPT, Claude, coding assistants) persistent, temporally-aware memory by maintaining three memory layers: episodic (raw), semantic (structured facts with bi-temporal edges), and a user profile. It is inspired by Mem0\'s fact extraction pipeline and Zep/Graphiti\'s bi-temporal edge model, but implemented without a graph database — using SQLite + Qdrant only, keeping it lightweight and self-hostable.',
      badge: 'In progress',
        boxed: true,
    href: 'https://github.com/dishafaujdar/Mnemo',
  },
]

export function Projects() {
  return (
    <section id="projects" className="mb-16">
      <h2 className="font-mono font-bold text-ink text-base mb-6">
        Projects I&apos;ve worked on:
      </h2>
      <div>
        {projects.map((p, i) => (
          <TimelineEntry key={i} {...p} />
        ))}
      </div>
    </section>
  )
}
