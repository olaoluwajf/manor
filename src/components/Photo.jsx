import { useState } from 'react'
import { useReveal } from '../hooks/useReveal.js'
// The host stays unclipped (so it can be observed); the inner .wipe layer opens like a curtain.
export default function Photo({ src, alt, className = '', eager = false }) {
  const ref = useReveal(); const [ok, setOk] = useState(true)
  return (
    <div ref={ref} className={`photo ${className}`}>
      <div className="wipe">{ok ? <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} onError={() => setOk(false)} /> : <div className="photo-fallback" aria-hidden="true">M</div>}</div>
    </div>
  )
}
