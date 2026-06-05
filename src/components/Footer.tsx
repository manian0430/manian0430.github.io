import { Github, Mail, Phone, ArrowRight, Code2 } from 'lucide-react'
import { profile, navLinks } from '../data/content'

// Smooth, organic "molten drip" top edge — varied tongues joined by bezier curves (deterministic)
const W = 1200
const DRIP = (() => {
  const n = 13
  const pts: [number, number][] = []
  for (let i = 0; i <= n; i++) {
    const x = (i / n) * W
    const y = 82 + Math.sin(i * 1.5) * 36 + Math.sin(i * 0.8 + 1.3) * 24 + Math.sin(i * 3.2) * 11
    pts.push([x, Math.max(14, Math.min(154, y))])
  }
  let d = `M 0,0 L 0,${pts[0][1].toFixed(1)}`
  for (let i = 0; i < pts.length - 1; i++) {
    const xc = ((pts[i][0] + pts[i + 1][0]) / 2).toFixed(1)
    const yc = ((pts[i][1] + pts[i + 1][1]) / 2).toFixed(1)
    d += ` Q ${pts[i][0].toFixed(1)},${pts[i][1].toFixed(1)} ${xc},${yc}`
  }
  const last = pts[pts.length - 1]
  d += ` L ${last[0].toFixed(1)},${last[1].toFixed(1)} L ${W},0 Z`
  return d
})()

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden bg-accent text-bg" data-cursor-invert>
      {/* Smooth organic molten-drip top edge */}
      <div className="absolute inset-x-0 top-0" aria-hidden>
        <svg viewBox="0 0 1200 170" preserveAspectRatio="none" className="block w-full" style={{ height: 150 }}>
          <path d={DRIP} className="fill-bg" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-44">
        {/* 3-column row */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-lg font-extrabold">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="font-medium text-bg/80 transition-colors hover:text-bg hover:underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Say Hi */}
          <div className="text-center">
            <h3 className="text-lg font-extrabold">Say Hi!</h3>
            <p className="mt-2 font-medium text-bg/80">Interested in working together?</p>
            <a
              href="#contact"
              data-cursor-invert="false"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-bg px-6 py-3 font-bold text-accent transition-transform hover:scale-105"
            >
              Let's Chat! <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Socials + meta */}
          <div className="flex flex-col items-start gap-4 sm:items-end">
            <div className="flex gap-2.5">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-bg text-accent transition-transform hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-bg text-accent transition-transform hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                aria-label="Phone"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-bg text-accent transition-transform hover:scale-110"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
            <p className="font-bold">© {year} {profile.name}</p>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-bg/40 px-3 py-1 text-sm font-medium">
              <Code2 className="h-3.5 w-3.5" /> Built with React + Tailwind
            </span>
          </div>
        </div>
      </div>

      {/* Giant wordmark — full-bleed so it centers in the viewport and never clips */}
      <a href="#home" aria-label="Back to top" className="relative block select-none pb-3 pt-8">
        <span className="mono block text-center font-bold leading-[0.78] tracking-tighter text-bg text-[22vw]">
          ian.dev
        </span>
      </a>
    </footer>
  )
}
