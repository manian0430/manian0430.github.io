import { motion } from 'framer-motion'
import { ArrowUpRight, Lock, Star } from 'lucide-react'
import { SectionHeading } from './ui/SectionHeading'
import { StaggerGroup, staggerItem } from './ui/Reveal'
import { projects, type Project } from '../data/content'

function Card({ p }: { p: Project }) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-3">
        <div>
          {p.featured && (
            <span className="mono mb-2 inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[11px] text-accent">
              <Star className="h-3 w-3" /> Featured
            </span>
          )}
          <h3 className="text-xl font-bold text-ink">{p.name}</h3>
          <p className="mt-0.5 text-sm font-medium text-accent">{p.tagline}</p>
        </div>
        {p.link ? (
          <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-ink-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        ) : (
          <span className="mono inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-line px-2 py-0.5 text-[11px] text-ink-faint">
            <Lock className="h-3 w-3" /> private
          </span>
        )}
      </div>

      <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{p.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <span key={t} className="mono rounded-md bg-surface-2 px-2 py-0.5 text-xs text-ink-soft">
            {t}
          </span>
        ))}
      </div>
    </>
  )

  const cls = `card group flex flex-col p-6 ${p.featured ? 'sm:col-span-2' : ''}`

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

        <StaggerGroup className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.name} p={p} />
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
