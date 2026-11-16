import { useEffect, useRef } from 'react'
// Observes the host element itself. The host is never clipped, so it can always be seen entering the viewport.
export function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    if (!('IntersectionObserver' in window)) { el.classList.add('in'); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect() } }, { rootMargin: '0px 0px -8% 0px' })
    io.observe(el); return () => io.disconnect()
  }, [])
  return ref
}
