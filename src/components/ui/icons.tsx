import {
  Code2,
  Server,
  LayoutDashboard,
  Database,
  Cloud,
  BrainCircuit,
  Workflow,
  GitBranch,
  Wrench,
  Shield,
  Activity,
  Plug,
  type LucideIcon,
} from 'lucide-react'
import type { IconName } from '../../data/content'

const map: Record<IconName, LucideIcon> = {
  code: Code2,
  server: Server,
  layout: LayoutDashboard,
  database: Database,
  cloud: Cloud,
  brain: BrainCircuit,
  workflow: Workflow,
  gitbranch: GitBranch,
  wrench: Wrench,
  shield: Shield,
  activity: Activity,
  plug: Plug,
}

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const Cmp = map[name]
  return <Cmp className={className} strokeWidth={1.75} aria-hidden />
}
