import { motion } from 'framer-motion'
import { ArrowUpRight, Lock, Star, Terminal } from 'lucide-react'
import { SectionHeading } from './ui/SectionHeading'
import { StaggerGroup, staggerItem } from './ui/Reveal'
import { projects, type Project } from '../data/content'

function Preview({ p }: { p: Project }) {
  if (p.image) {
    return (
      <img
        src={`${import.meta.env.BASE_URL}${p.image.replace(/^\//, '')}`}
        alt={`Screenshot of ${p.name}`}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
      />
    )
  }
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-2 to-surface">
      <Terminal className="h-10 w-10 text-ink-faint" />
    </div>
  )
}

function Card({ p }: { p: Project }) {
  const inner = (
    <>
      {/* Preview */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface-2">
        <Preview p={p} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
        {p.featured && (
          <span className="mono absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-bg/80 px-2 py-0.5 text-[11px] text-accent backdrop-blur">
            <Star className="h-3 w-3" /> Featured
          </span>
        )}
        {p.link ? (
          <span className="mono absolute right-3 top-3 inline-flex translate-y-1 items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[11px] font-medium text-[#06210f] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Visit site <ArrowUpRight className="h-3 w-3" />
          </span>
        ) : (
          <span className="mono absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-line bg-bg/80 px-2 py-0.5 text-[11px] text-ink-faint backdrop-blur">
            <Lock className="h-3 w-3" /> private
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-ink transition-colors group-hover:text-accent">{p.name}</h3>
            <p className="mt-0.5 text-sm font-medium text-accent">{p.tagline}</p>
          </div>
          <span className="mono whitespace-nowrap text-xs text-ink-faint">{p.year}</span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className="mono rounded-md bg-surface-2 px-2 py-0.5 text-xs text-ink-soft">
              {t}
            </span>
          ))}
        </div>
      </div>
    </>
  )

  const cls = `card group flex flex-col overflow-hidden p-0 ${p.featured ? 'lg:col-span-2' : ''}`

  return p.link ? (
    <motion.a variants={staggerItem} href={p.link} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </motion.a>
  ) : (
    <motion.div variants={staggerItem} className={cls}>
      {inner}
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="03" title="Projects" subtitle="Products and platforms I've designed, built and shipped." />

        <StaggerGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.name} p={p} />
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
