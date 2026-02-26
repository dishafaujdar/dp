const labLinks: { title: string; href: string }[] = [
  {
    title: 'RL basics',
    href: 'https://colab.research.google.com/drive/1dbXkz6aV-PKGmvH4iL0anIZRmijKVBOP?usp=sharing',
  },
  {
    title: 'Search Engine ',
    href: 'https://colab.research.google.com/drive/1h9y7cF4uUcCO5rfW7lkntUYO-QF8zTT_?usp=sharing',
  },
  {
    title: 'MultiModal',
    href: 'https://colab.research.google.com/drive/1X-AuG7Q0lcH3AQqWL5I2DJmgN8t3qZ6v?usp=sharing',
  },
  {
    title: 'Inference basics',
    href: 'https://colab.research.google.com/drive/131-UD-_LCiFtd0UtlpdFck_nw226NsPn?usp=sharing',
  },
]

export function Lab() {
  return (
    <section id="lab" className="mb-16">
      <h2 className="font-mono font-bold text-ink text-base mb-1">Lab</h2>
      <p className="font-mono text-ink-dim text-[14px] mb-4">
        Experiments &amp; exploration.
      </p>
      {labLinks.length > 0 ? (
        <ul className="list-none m-0 p-0 space-y-2 font-mono text-[15px]">
          {labLinks.map(({ title, href }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-ink underline underline-offset-4 decoration-black/35"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="font-mono text-ink-dim text-[14px] italic">
          Notebooks and Colab links coming soon.
        </p>
      )}
    </section>
  )
}
