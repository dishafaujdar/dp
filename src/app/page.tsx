import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Experience } from '@/components/Experience'
import { Lab } from '@/components/Lab'
import { Skills } from '@/components/Skills'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <main className="max-w-content mx-auto px-16 pb-24 max-sm:px-6">
      <h1 className="sr-only">
        Disha Faujdar — Software Engineer &amp; AI Practitioner. Portfolio and projects.
      </h1>
      <Nav />
      <Hero />
      <Projects />
      <Lab />
      <Experience />
      <Skills />
      <Contact />
      <footer className="font-mono text-ink text-base border-t border-divider pt-6 pb-10">
        Disha Faujdar ❤️
      </footer>
    </main>
  )
}
