import { motion } from 'framer-motion'
import { SectionHeading } from './ui/SectionHeading'
import { experience } from '../data/content'

const ease = [0.22, 1, 0.36, 1] as const

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading index="04" title="Experience" subtitle="6+ years across fintech, real estate, AI and enterprise." />

        <div className="relative">
          <div className="absolute bottom-2 left-0 top-2 w-px bg-line sm:left-2" />
          {experience.map((exp, i) => (
            <motion.article
              key={exp.company + exp.date}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease }}
              className="relative pb-10 pl-8 last:pb-0 sm:pl-10"
            >
              {/* node */}
              <span className="absolute left-0 top-1.5 -translate-x-1/2 sm:left-2">
                <span className="block h-3 w-3 rounded-full border-2 border-accent bg-bg shadow-[0_0_10px_2px_rgba(34,197,94,0.4)]" />
              </span>

              <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="mono text-xs text-ink-faint">{exp.date}</span>
                {exp.freelance && (
                  <span className="mono rounded-full border border-line px-2 py-0.5 text-[10px] text-cyan">freelance</span>
                )}
              </div>
              <h3 className="text-xl font-bold text-ink">{exp.role}</h3>
              <p className="font-semibold text-accent">{exp.company}</p>

              <ul className="mt-3 space-y-2">
                {exp.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 leading-relaxed text-ink-soft">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tags.map((t) => (
                  <span key={t} className="mono rounded-md bg-surface-2 px-2 py-0.5 text-xs text-ink-soft">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
