import { useEffect, useRef, useState } from 'react'
import { Code2 } from 'lucide-react'

const base = import.meta.env.BASE_URL

type Item = { slug: string; label: string; ring: 0 | 1 }

const items: Item[] = [
  // inner ring
  { slug: 'python', label: 'Python', ring: 0 },
  { slug: 'javascript', label: 'JavaScript', ring: 0 },
  { slug: 'typescript', label: 'TypeScript', ring: 0 },
  { slug: 'react', label: 'React', ring: 0 },
  { slug: 'nodedotjs', label: 'Node.js', ring: 0 },
  // outer ring
  { slug: 'nextdotjs', label: 'Next.js', ring: 1 },
  { slug: 'fastapi', label: 'FastAPI', ring: 1 },
  { slug: 'docker', label: 'Docker', ring: 1 },
  { slug: 'postgresql', label: 'PostgreSQL', ring: 1 },
  { slug: 'tailwindcss', label: 'Tailwind', ring: 1 },
  { slug: 'supabase', label: 'Supabase', ring: 1 },
  { slug: 'claude', label: 'Claude', ring: 1 },
]

const rings = [
  { r: 92, speed: 0.28, color: '34,197,94', node: 46 }, // green inner
  { r: 165, speed: -0.2, color: '56,189,248', node: 40 }, // cyan outer
]

const counts = [items.filter((i) => i.ring === 0).length, items.filter((i) => i.ring === 1).length]
const indexInRing = (arr: Item[], item: Item) => arr.filter((i) => i.ring === item.ring).indexOf(item)

export function OrbitingSkills() {
  const [t, setT] = useState(0)
  const paused = useRef(false)
  const reduced = useRef(false)

  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced.current) return
    let raf = 0
    let last = performance.now()
    const loop = (now: number) => {
      const dt = (now - last) / 1000
      last = now
      if (!paused.current) setT((p) => p + dt)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div
      className="relative mx-auto h-[340px] w-[340px] sm:h-[400px] sm:w-[400px]"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      {/* orbit rings */}
      {rings.map((ring, ri) => (
        <div
          key={ri}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: ring.r * 2,
            height: ring.r * 2,
            border: `1px solid rgba(${ring.color},0.25)`,
            boxShadow: `inset 0 0 40px rgba(${ring.color},0.08), 0 0 30px rgba(${ring.color},0.06)`,
          }}
        />
      ))}

      {/* core */}
      <div className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface-2">
        <div className="absolute inset-0 rounded-full bg-accent/25 blur-xl" />
        <div className="absolute inset-0 rounded-full bg-cyan/20 blur-2xl" />
        <Code2 className="relative h-8 w-8 text-accent" strokeWidth={2} />
      </div>

      {/* orbiting nodes */}
      {items.map((item) => {
        const ring = rings[item.ring]
        const n = counts[item.ring]
        const phase = (indexInRing(items, item) / n) * Math.PI * 2
        const angle = t * ring.speed + phase
        const x = Math.cos(angle) * ring.r
        const y = Math.sin(angle) * ring.r
        return <Node key={item.slug} item={item} x={x} y={y} size={ring.node} color={ring.color} />
      })}
    </div>
  )
}

function Node({ item, x, y, size, color }: { item: Item; x: number; y: number; size: number; color: string }) {
  const [hover, setHover] = useState(false)
  return (
    <div
      className="absolute left-1/2 top-1/2 transition-transform duration-300"
      style={{
        width: size,
        height: size,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%)) scale(${hover ? 1.25 : 1})`,
        zIndex: hover ? 30 : 10,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="flex h-full w-full items-center justify-center rounded-2xl border border-line bg-surface-2/90 p-2.5 backdrop-blur"
        style={{ boxShadow: hover ? `0 0 24px rgba(${color},0.5)` : `0 0 12px rgba(${color},0.12)` }}
      >
        <img src={`${base}icons/${item.slug}.svg`} alt={item.label} className="h-full w-full object-contain" loading="lazy" />
      </div>
      {hover && (
        <span className="mono pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-line bg-bg px-2 py-0.5 text-[11px] text-ink">
          {item.label}
        </span>
      )}
    </div>
  )
}
