import Image from 'next/image'
import { Eyes } from './Eyes'

export function Hero() {
  return (
    <section className="mb-16">
      <Eyes />

      <div
        className="relative w-full rounded-2xl overflow-hidden border border-divider mb-8"
        style={{ aspectRatio: '16/7' }}
      >
        <Image
          src="/workstation.jpg"
          alt="Disha's workstation"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 860px) 100vw, 860px"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 sm:gap-12">
        <div className="flex-1 min-w-0">
          <p className="font-mono text-ink text-base mb-5">Hey, it&apos;s I !!</p>

          <p className="font-mono text-ink-desc text-base leading-relaxed max-w-[55ch]">
            Disha Faujdar, an engineer from, India.
            Currently interning at{' '}
            <a
              href="https://www.funnyshortjokes.com"
              target="_blank"
              rel="noreferrer"
              className="text-ink underline underline-offset-4 decoration-black/35 hover:decoration-black transition-all"
            >
              no where
            </a>
            , I build things that put me in flow — code, content, whatever pulls me in.
            </p>
        </div>

        <dl className="font-mono text-[14px] leading-relaxed flex-shrink-0 sm:text-right space-y-2 sm:mt-10">
          <div className="flex gap-2 flex-wrap sm:justify-end">
            <span className="text-ink-dim">Location:</span>
            <span className="text-ink">India</span>
          </div>
          <div className="flex gap-2 flex-wrap sm:justify-end">
            <span className="text-ink-dim">Experience:</span>
            <span className="text-ink">~2 years</span>
          </div>
          <div className="flex flex-col sm:items-end">
            <div className="flex gap-2 flex-wrap sm:justify-end">
              <span className="text-ink-dim">Role:</span>
              <span className="text-ink flex flex-col sm:items-end">
                <span>Software || AI/ML Engineering</span>
              </span>
            </div>
          </div>
        </dl>
      </div>
    </section>
  )
}
