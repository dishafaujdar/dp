import { TimelineEntry } from './ui/TimelineEntry'

const experience = [
  {
    title: 'Software Engineer (Intern) — Superset',
    date: 'Aug 2025 — Feb 2026',
    description:
      'Built an AI-powered health tracking mobile app with Expo, Supabase, and PostgreSQL. Improved screen load times by ~35% via soft reloading, client-side caching, and incremental state updates. Enhanced in-app search with prefix-based and fuzzy matching, improving successful search results by ~45%. Tech: Expo, Node.js, Prisma.',
    badge: 'Current',
    boxed: true,
    href: 'https://linkedin.com/company/superset-hq',
  },
  {
    title: 'Software Engineer (Freelancer) — US Based Startup',
    date: 'July 2025',
    description:
      'Developed a full-stack inventory management system using Next.js, React, and TypeScript. Improved data retrieval performance by ~40% through normalized schemas and indexed queries. Reduced manual inventory tracking errors by ~60% with automated stock updates and validation logic. Tech: React.js, Node.js, Prisma.',
    boxed: false,
  },
  {
    title: 'AI Engineer (Intern) — Marshmallo AI',
    date: 'July 2025 — Aug 2025',
    description:
      'Implemented continual learning pipelines that reduced model performance degradation. Built simulation environments to run 100+ experiment iterations/day, accelerating model evaluation cycles. Tech: Python.',
    boxed: false,
  },
]

export function Experience() {
  return (
    <section id="experience" className="mb-16">
      <h2 className="font-mono font-bold text-ink text-base mb-6">Experience</h2>
      <div>
        {experience.map((e, i) => (
          <TimelineEntry key={i} {...e} />
        ))}
      </div>
    </section>
  )
}
