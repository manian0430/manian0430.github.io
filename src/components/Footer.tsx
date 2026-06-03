import { Github } from 'lucide-react'
import { profile, navLinks } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="mono text-sm text-ink-faint">
          © {new Date().getFullYear()} {profile.name} ·{' '}
          <span className="text-ink-soft">built with React + Tailwind</span>
        </p>
        <div className="flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-ink-faint transition-colors hover:text-accent">
              {l.label}
            </a>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-faint transition-colors hover:text-accent"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
