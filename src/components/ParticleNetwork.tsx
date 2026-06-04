import { useEffect, useRef } from 'react'

interface P {
  x: number
  y: number
  vx: number
  vy: number
  c: string
}

const NODE_COLORS = ['rgba(34,197,94,0.9)', 'rgba(56,189,248,0.85)'] // green, cyan
const LINK = '45,212,191' // teal between green & cyan
const MAX_DIST = 135
const MOUSE_DIST = 170

/** Fixed canvas of drifting nodes connected by lines — ties all sections together. */
export function ParticleNetwork() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0
    let h = 0
    let particles: P[] = []
    const mouse = { x: -9999, y: -9999 }

    const build = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(85, Math.max(28, Math.floor((w * h) / 20000)))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        c: NODE_COLORS[Math.random() > 0.5 ? 1 : 0],
      }))
    }

    const drawLinks = () => {
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.hypot(dx, dy)
          if (d < MAX_DIST) {
            ctx.strokeStyle = `rgba(${LINK},${(1 - d / MAX_DIST) * 0.18})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
        // link to cursor
        const mdx = a.x - mouse.x
        const mdy = a.y - mouse.y
        const md = Math.hypot(mdx, mdy)
        if (md < MOUSE_DIST) {
          ctx.strokeStyle = `rgba(${LINK},${(1 - md / MOUSE_DIST) * 0.35})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      }
    }

    const drawNodes = () => {
      for (const p of particles) {
        ctx.fillStyle = p.c
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    let raf = 0
    const frame = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
      }
      drawLinks()
      drawNodes()
      raf = requestAnimationFrame(frame)
    }

    build()
    if (reduced) {
      // single static frame
      drawLinks()
      drawNodes()
    } else {
      raf = requestAnimationFrame(frame)
    }

    const onResize = () => build()
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }
    window.addEventListener('resize', onResize)
    if (!reduced) {
      window.addEventListener('mousemove', onMove)
      window.addEventListener('mouseout', onLeave)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{ opacity: 0.55 }}
    />
  )
}
