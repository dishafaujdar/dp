'use client'

import { useEffect, useRef } from 'react'

function Eye() {
  const eyeRef = useRef<HTMLDivElement>(null)
  const irisRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!eyeRef.current || !irisRef.current) return
      const r = eyeRef.current.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const ang = Math.atan2(e.clientY - cy, e.clientX - cx)
      const d = 5 // max px iris travels from center
      irisRef.current.style.transform = `translate(${Math.cos(ang) * d}px, ${Math.sin(ang) * d}px)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={eyeRef}
      className="w-9 h-9 rounded-full border-2 border-ink bg-parchment flex items-center justify-center"
    >
      <div
        ref={irisRef}
        className="w-[15px] h-[15px] rounded-full bg-ink border-2 border-ink"
        style={{ transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1)' }}
      />
    </div>
  )
}

export function Eyes() {
  return (
    <div className="flex items-center gap-2 mb-8">
      <Eye />
      <Eye />
    </div>
  )
}
