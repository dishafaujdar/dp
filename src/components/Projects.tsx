import { tr } from 'framer-motion/client'
import { TimelineEntry } from './ui/TimelineEntry'

const projects = [
  {
    title: 'Fillit',
    date: '2026',
    description: 'Fillit is a job application autofill system: a Next.js dashboard to manage your profile and resumes, a Chrome extension that fills application forms using a native setter strategy cascade, and a Node/Express API with PostgreSQL.',
    badge: 'New',
    boxed: true,
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
    title: 'Trainyard',
    date: '2024',
    description:
      'Interactive web app for experimenting with ML models. Real-time training and visualization over WebSockets with PyTorch and FastAPI.',
    boxed: false,
    href: 'https://github.com/dishafaujdar/Trainyard',
  },
  {
    title: 'MiniKit',
    date: '2023',
    description:
      'Scikit-learn built from scratch in NumPy to understand ML algorithms at their mathematical core.',
    boxed: false,
    href: 'https://github.com/dishafaujdar/MiniKit',
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
