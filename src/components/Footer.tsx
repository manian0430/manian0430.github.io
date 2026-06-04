import { Github, Mail, Phone, ArrowUp } from 'lucide-react'
import { profile, navLinks } from '../data/content'

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="mono text-lg font-bold tracking-tight text-ink">
              <span className="text-accent">~/</span>ian<span className="text-accent">.dev</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
              Full-stack developer building scalable web, mobile and AI products — from voice agents to RAG systems.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="mono text-xs font-medium text-accent">Available for work</span>
            </span>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="mono mb-4 text-xs uppercase tracking-[0.16em] text-ink-faint">Navigate</h3>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-ink-soft transition-colors hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mono mb-4 text-xs uppercase tracking-[0.16em] text-ink-faint">Connect</h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-ink-soft transition-colors hover:text-accent"
                >
                  <Github className="h-4 w-4" /> {profile.githubUser}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2.5 text-sm text-ink-soft transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4" /> {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2.5 text-sm text-ink-soft transition-colors hover:text-accent"
                >
                  <Phone className="h-4 w-4" /> {profile.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-line py-6 sm:flex-row">
          <p className="mono text-xs text-ink-faint">
            © {new Date().getFullYear()} {profile.name} ·{' '}
            <span className="text-ink-soft">built with React + Tailwind</span>
          </p>
          <a
            href="#home"
            className="mono inline-flex items-center gap-2 rounded-lg border border-line px-3 py-1.5 text-xs text-ink-soft transition-colors hover:border-accent hover:text-accent"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div aria-hidden className="pointer-events-none select-none px-6">
        <span className="mono block text-center text-[18vw] font-bold leading-[0.7] tracking-tighter text-ink/[0.035]">
          ian.dev
        </span>
      </div>
    </footer>
  )
}
