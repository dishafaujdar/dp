'use client'

import Link from 'next/link'

export function Nav() {
  return (
    <nav className="flex justify-between items-baseline pt-10 pb-12">
      <Link
        href="/"
        className="font-mono font-bold text-ink text-[28px] leading-none no-underline"
      >
        Disha Faujdar
      </Link>
      <ul className="flex gap-6 list-none m-0 p-0">
        {[
          ['Home', '/'],
          ['Projects', '#projects'],
          ['Contact', '#contact'],
        ].map(([label, href]) => (
          <li key={href}>
            <Link
              href={href}
              className="font-mono text-ink text-base underline underline-offset-4 decoration-black/35"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
