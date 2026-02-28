import { TimelineEntry } from './ui/TimelineEntry'

const projects = [
  {
    title: 'WikiMind - RAG',
    date: '2026',
    description:
      'WikiMind — full-stack RAG system where users upload PDFs and chat with their documents. Built adaptive retrieval hybrid BM25 + reranking based on corpus size, hierarchical chunking, streaming responses, used async pipelines, redis and bull.js for queuing and background jobs, and end-to-end observability via Langfuse.',
    badge: 'New',
    boxed: true,
    href: 'https://github.com/dishafaujdar/WikiMind-RAG',
  },
  {
    title: 'Synthesia — AI Research Agent',
    date: '2025',
    description:
      'AI Research Agent that accepts a topic, runs a small research workflow, and returns a structured result. Tech: TypeScript, Redis, Bull.js, Express, PostgreSQL.',
    badge: 'New',
    boxed: false,
    href: 'https://github.com/dishafaujdar',
  },
  {
    title: 'OSS-Align',
    date: '2025',
    description:
      'Conservative decision system matching developers with realistic open-source contribution opportunities. Analyzes proven work history and matches with contributor-friendly repos. Tech: Python, Typer, Rich, GitHub API, Sentence Transformers, FAISS, LLMs.',
    badge: 'New',
    boxed: false,
    href: 'https://github.com/dishafaujdar',
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
    href: 'https://github.com/dishafaujdar',
  },
  {
    title: 'ChessMind',
    date: '2026',
    description: 'Under construction — more info coming soon.',
      badge: 'In progress',
        boxed: false,
    href: 'https://github.com/dishafaujdar',
  },
  {
    title: 'shipBase',
    date: '2026',
    description: 'Under construction — more info coming soon.',
    badge: 'In progress',
    boxed: false,
    href: 'https://github.com/dishafaujdar/shipBase',
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
