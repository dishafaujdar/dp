const handles = [
  { label: 'X', href: 'https://x.com/dishafaujdar' },
  { label: 'Github', href: 'https://github.com/dishafaujdar' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dishafaujdar/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@watchmeEngineering' },
  { label: 'Fiverr', href: 'https://www.fiverr.com/s/qD1G97p' },
  { label: 'Resume', href: 'https://drive.google.com/file/d/185rWEaem98bpIuL9W5LJw2Sx3ER0Bfgb/view?usp=share_link' },
]

export function Contact() {
  return (
    <section id="contact" className="mb-16">
      <p className="font-mono text-ink-desc text-base leading-relaxed mb-10 max-w-[55ch]">
        DMs open. Coffee first. ☕
        <br />
        Reach me at{' '}
        <a
          href="mailto:dishafaujdar.work@gmail.com"
          className="text-ink underline underline-offset-4 decoration-black/35"
        >
          dishafaujdar.work@gmail.com
        </a>
        .
      </p>

      <h2 className="font-mono font-bold text-ink text-base mb-4">Handles</h2>

      <div className="flex gap-8 flex-wrap">
        {handles.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-ink text-base underline underline-offset-4 decoration-black/35"
          >
            {label}
          </a>
        ))}
      </div>
    </section>
  )
}
