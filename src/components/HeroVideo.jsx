import { useEffect, useRef, useState } from 'react'
import { HERO_VIDEO } from '../data/content.js'
export default function HeroVideo() {
  const ref = useRef(null); const [ready, setReady] = useState(false)
  useEffect(() => { if (matchMedia('(prefers-reduced-motion: reduce)').matches) ref.current?.pause() }, [])
  return <video ref={ref} className={`hero-video ${ready ? 'ready' : ''}`} src={HERO_VIDEO} autoPlay muted loop playsInline preload="auto" aria-hidden="true" onCanPlay={() => setReady(true)} />
}
