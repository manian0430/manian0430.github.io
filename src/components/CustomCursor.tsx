import { useEffect, useRef } from 'react'

const INTERACTIVE = 'a, button, input, textarea, select, label, [role="button"], .cursor-target'

/** Accent dot that tracks precisely + a smooth-lagging ring that grows on interactive elements.
 *  Desktop (fine pointer) only; respects reduced-motion. */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dot = dotRef.current
    const ring = ringRef.current
    if (!fine || reduced || !dot || !ring) return

    const style = document.createElement('style')
    style.textContent = '*{cursor:none !important}'
    document.head.appendChild(style)

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let sc = 1
    let hovering = false
    let down = false
    let visible = false
    let onGreen = false // over the green footer → invert cursor to dark

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`
      const t = e.target as HTMLElement | null
      hovering = Boolean(t && t.closest(INTERACTIVE))
      const inv = t && t.closest('[data-cursor-invert]')
      onGreen = inv ? inv.getAttribute('data-cursor-invert') !== 'false' : false
      dot.style.opacity = hovering ? '0' : '1'
      if (!visible) {
        visible = true
        ring.style.opacity = '1'
        if (!hovering) dot.style.opacity = '1'
      }
    }
    const onLeave = () => {
      visible = false
      dot.style.opacity = '0'
      ring.style.opacity = '0'
    }
    const onDown = () => (down = true)
    const onUp = () => (down = false)

    let raf = 0
    const loop = () => {
      rx += (mx - rx) * 0.2
      ry += (my - ry) * 0.2
      const target = hovering ? 1.8 : down ? 0.8 : 1
      sc += (target - sc) * 0.22
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${sc})`
      // Invert to dark over green surfaces, else stay accent green
      dot.style.backgroundColor = onGreen ? '#050506' : '#22c55e'
      ring.style.borderColor = onGreen ? 'rgba(5,5,6,0.85)' : 'rgba(34,197,94,0.7)'
      ring.style.backgroundColor = hovering
        ? onGreen
          ? 'rgba(5,5,6,0.18)'
          : 'rgba(34,197,94,0.12)'
        : 'transparent'
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.head.removeChild(style)
    }
  }, [])

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full border border-accent/70 opacity-0 transition-[background-color] duration-200"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-accent opacity-0"
        style={{ willChange: 'transform' }}
      />
    </>
  )
}
