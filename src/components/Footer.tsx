import { Github, Mail, Phone, ArrowRight, Code2 } from 'lucide-react'
import { profile, navLinks } from '../data/content'

// jagged "equalizer / code skyline" top edge — deterministic heights (no Math.random)
const bars = Array.from({ length: 32 }, (_, i) =>
  18 + Math.round((Math.sin(i * 0.9) * 0.5 + 0.5) * 42) + (i % 4 === 0 ? 16 : 0),
)

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden bg-accent text-bg">
      {/* Code-skyline top edge (dark teeth dripping from the page above into the green) */}
      <div className="absolute inset-x-0 top-0 flex items-start gap-1.5 px-1.5" aria-hidden>
        {bars.map((h, i) => (
          <span key={i} className="flex-1 rounded-b-xl bg-bg" style={{ height: h }} />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-32">
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

        {/* Giant wordmark */}
        <a href="#home" aria-label="Back to top" className="mt-10 block select-none">
          <span className="mono block text-center font-bold leading-[0.78] tracking-tighter text-bg text-[22vw]">
            ian.dev
          </span>
        </a>
      </div>
    </footer>
  )
}
