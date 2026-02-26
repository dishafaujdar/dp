const handles = [
  { label: 'X', href: 'https://x.com/DisHasCode' },
  { label: 'Github', href: 'https://github.com/dishafaujdar' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dishafaujdar/' },
  { label: 'Resume', href: 'https://drive.google.com/file/d/13rFSkvz_03Wza2OVu3QQ4aFEhD-zVnOV/view?usp=sharing' },
  { label: 'YouTube', href: 'https://www.youtube.com/@watchmeEngineering' },
  { label: 'Fiverr', href: 'https://www.fiverr.com/s/qD1G97p' },
  // { label: 'Phone', href: 'tel:+919166890988' },
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
          className="text-ink underline underline-offset-4 decoration-black/35 hover:decoration-black transition-all"
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
            className="font-mono text-ink text-base underline underline-offset-4 decoration-black/35 hover:decoration-black transition-all duration-150"
          >
            {label}
          </a>
        ))}
      </div>
    </section>
  )
}
