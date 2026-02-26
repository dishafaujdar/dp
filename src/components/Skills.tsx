const problemGroups: { label: string; items: string[] }[] = [
  {
    label: 'Systems & Scale',
    items: [
      'Distributed Systems',
      'Horizontal Scaling',
      'Load Balancing',
      'Message Queues',
      'Event-Driven Architecture',
      'Caching Strategies',
      'Database Sharding',
    ],
  },
  {
    label: 'Real-Time & Async',
    items: [
      'WebSocket Systems',
      'Job Queues & Workers',
      'Stream Processing',
      'Async/Concurrent Design',
    ],
  },
  {
    label: 'AI & ML Engineering',
    items: [
      'LLM Integration',
      'RAG Pipelines',
      'Vector Search',
    ],
  },
  {
    label: 'Backend & APIs',
    items: [
      'REST API Design',
      'Auth Systems',
      'Rate Limiting',
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="mb-16">
      <h2 className="font-mono font-bold text-ink text-base mb-6">
        Problems I can solve
      </h2>
      <div className="space-y-2 font-mono text-ink text-[15px] leading-relaxed">
        {problemGroups.map((group) => (
          <p key={group.label} className="m-0">
            <span className="font-bold text-ink-dim">{group.label}:</span>{' '}
            {group.items.join(', ')}
          </p>
        ))}
      </div>
    </section>
  )
}
