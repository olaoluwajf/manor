import { useEffect, useRef } from 'react'
// Drifts slowly, and surges in the direction you scroll.
export default function Marquee({ text }) {
  const track = useRef(null)
  useEffect(() => {
    let x = 0, last = window.scrollY, v = 0, raf
    const tick = () => {
      const y = window.scrollY; v += ((y - last) * 0.6 - v) * 0.1; last = y
      x -= 0.5 + v; const w = track.current.scrollWidth / 2
      if (x <= -w) x += w; if (x > 0) x -= w
      track.current.style.transform = `translate3d(${x}px,0,0)`; raf = requestAnimationFrame(tick)
    }
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])
  const row = Array.from({ length: 6 }, (_, i) => <span key={i}>{text}<i>✦</i></span>)
  return <div className="marquee" aria-hidden="true"><div ref={track} className="marquee-track">{row}{row}</div></div>
}
