import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const ease = [0.22, 1, 0.36, 1] as const
const directions = {
  up: { y: 32, x: 0 },
  down: { y: -32, x: 0 },
  left: { x: 48, y: 0 },
  right: { x: -48, y: 0 },
  none: { x: 0, y: 0 },
}
type Direction = keyof typeof directions

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className,
}: {
  children: ReactNode
  direction?: Direction
  delay?: number
  className?: string
}) {
  const offset = directions[direction]
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}

export function StaggerGroup({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
    >
      {children}
    </motion.div>
  )
}
