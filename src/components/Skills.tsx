import { motion } from 'framer-motion'
import { SectionHeading } from './ui/SectionHeading'
import { StaggerGroup, staggerItem } from './ui/Reveal'
import { Icon } from './ui/icons'
import { skillGroups } from '../data/content'

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="02" title="Skills" subtitle="The stack I build, ship and scale with." />

        <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <motion.div key={g.title} variants={staggerItem} className="card p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon name={g.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-ink">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span key={item} className="chip mono">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
