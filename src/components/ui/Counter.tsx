import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export function Counter({ value, suffix = '' }: { value: number | string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState<number | string>(typeof value === 'number' ? 0 : value)

  useEffect(() => {
    if (!inView || typeof value !== 'number') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value)
      return
    }
    const duration = 1200
    let raf = 0
    let start: number | null = null
    const tick = (t: number) => {
      if (start === null) start = t
      const p = Math.min((t - start) / duration, 1)
      setDisplay(Math.round((1 - Math.pow(1 - p, 3)) * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
