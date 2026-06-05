import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const LINES: { t: string; k: 'cmd' | 'out' | 'ok' }[] = [
  { t: '$ whoami', k: 'cmd' },
  { t: 'Ian Managuelod — Full-Stack & AI Engineer', k: 'out' },
  { t: '$ status --availability', k: 'cmd' },
  { t: '● available for work', k: 'ok' },
  { t: '$ cat contact.txt', k: 'cmd' },
  { t: 'email    managuelodian@gmail.com', k: 'out' },
  { t: 'github   manian0430', k: 'out' },
  { t: 'phone    0915 779 6065', k: 'out' },
  { t: '$ echo "let\'s build something great"', k: 'cmd' },
]

const color: Record<string, string> = { cmd: 'text-ink', out: 'text-ink-soft', ok: 'text-accent' }

function Cursor() {
  return (
    <span
      aria-hidden
      className="ml-0.5 inline-block w-[0.5em] translate-y-[0.12em] bg-accent align-baseline"
      style={{ height: '1.05em', animation: 'blink 1s step-end infinite' }}
    />
  )
}

export function ContactTerminal() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const [li, setLi] = useState(0)
  const [ci, setCi] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLi(LINES.length)
      setDone(true)
      return
    }
    let cancelled = false
    let l = 0
    let c = 0
    let timer = 0
    const tick = () => {
      if (cancelled) return
      if (l >= LINES.length) {
        setDone(true)
        return
      }
      const len = LINES[l].t.length
      if (c <= len) {
        setLi(l)
        setCi(c)
        c += 1
        timer = window.setTimeout(tick, 16 + Math.random() * 26)
      } else {
        l += 1
        c = 0
        timer = window.setTimeout(tick, 240)
      }
    }
    timer = window.setTimeout(tick, 450)
    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [inView])

  return (
    <div ref={ref} className="card overflow-hidden">
      <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="mono ml-3 text-xs text-ink-faint">contact.sh</span>
      </div>
      <div className="mono min-h-[17rem] space-y-1 p-5 text-[13px] leading-relaxed sm:text-sm">
        {LINES.map((line, i) => {
          if (done || i < li) return <div key={i} className={color[line.k]}>{line.t}</div>
          if (i === li)
            return (
              <div key={i} className={color[line.k]}>
                {line.t.slice(0, ci)}
                <Cursor />
              </div>
            )
          return null
        })}
        {done && (
          <div className="text-ink">
            ${' '}
            <Cursor />
          </div>
        )}
      </div>
    </div>
  )
}
