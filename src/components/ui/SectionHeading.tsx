import { Reveal } from './Reveal'

export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string
  title: string
  subtitle?: string
}) {
  return (
    <Reveal className="mb-12">
      <p className="mono mb-3 text-sm text-accent">
        <span className="text-ink-faint">{index}</span> // {title.toLowerCase()}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-2xl text-lg text-ink-soft">{subtitle}</p>}
    </Reveal>
  )
}
