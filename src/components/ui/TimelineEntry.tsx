import Link from 'next/link'

export interface EntryData {
  title: string
  date: string
  description: string
  href?: string
  badge?: string // "New" | "Current" | "In progress"
  boxed?: boolean // whether to draw the card border
}

export function TimelineEntry({
  title,
  date,
  description,
  href,
  badge,
  boxed,
}: EntryData) {
  const inner = boxed ? (
    <div className="border-2 border-transparent rounded-[3px] hover:border-ink transition-all duration-150">
      <div className="py-3 px-5 font-mono group hover:bg-parch-dk transition-all duration-150 border border-divider rounded-[3px]">
        {/* Row 1: title left, date right */}
        <div className="flex items-baseline justify-between gap-3 mb-[3px]">
          <div className="flex items-baseline gap-2 min-w-0">
            {badge && (
              <span className="text-[11px] bg-badge text-ink px-[7px] py-[2px] rounded-[3px] leading-none flex-shrink-0 font-mono font-normal">
                {badge}
              </span>
            )}
            <span className="font-mono font-bold text-ink text-[15px] leading-snug">
              {title}
            </span>
          </div>
          <span className="font-mono text-ink-dim text-[14px] whitespace-nowrap flex-shrink-0">
            {date}
          </span>
        </div>

        {/* Row 2: description */}
        <p className="font-mono text-ink-desc text-[14px] leading-relaxed m-0">
          {description}
        </p>
      </div>
    </div>
  ) : (
    <div className="py-3 px-5 font-mono group hover:bg-parch-dk transition-all duration-150">
      {/* Row 1: title left, date right */}
      <div className="flex items-baseline justify-between gap-3 mb-[3px]">
        <div className="flex items-baseline gap-2 min-w-0">
          {badge && (
            <span className="text-[11px] bg-badge text-ink px-[7px] py-[2px] rounded-[3px] leading-none flex-shrink-0 font-mono font-normal">
              {badge}
            </span>
          )}
          <span className="font-mono font-bold text-ink text-[15px] leading-snug">
            {title}
          </span>
        </div>
        <span className="font-mono text-ink-dim text-[14px] whitespace-nowrap flex-shrink-0">
          {date}
        </span>
      </div>

      {/* Row 2: description */}
      <p className="font-mono text-ink-desc text-[14px] leading-relaxed m-0">
        {description}
      </p>
    </div>
  )

  return (
    <div className="flex items-stretch gap-4">
      {/* Bullet + vertical line column */}
      <div className="flex flex-col items-center w-3 flex-shrink-0">
        <div className="w-[7px] h-[7px] rounded-full bg-ink mt-[13px] flex-shrink-0" />
        <div className="w-px bg-divider flex-1 mt-1" />
      </div>

      {/* Entry content */}
      <div className="flex-1 pb-7">
        {href ? (
          <Link
            href={href}
            target="_blank"
            rel="noreferrer"
            className="block no-underline"
          >
            {inner}
          </Link>
        ) : (
          inner
        )}
      </div>
    </div>
  )
}
