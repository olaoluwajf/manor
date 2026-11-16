import { useEffect, useState } from 'react'
const go = (to) => { history.pushState({}, '', to); dispatchEvent(new PopStateEvent('popstate')) }
export function usePath() {
  const [p, setP] = useState(location.pathname)
  useEffect(() => {
    const f = () => { setP(location.pathname); window.scrollTo({ top: 0, behavior: 'instant' }) }
    addEventListener('popstate', f); return () => removeEventListener('popstate', f)
  }, [])
  return p
}
export function Link({ to, children, ...rest }) {
  const click = (e) => { if (e.metaKey || e.ctrlKey || e.shiftKey || e.button) return; e.preventDefault(); go(to) }
  return <a href={to} onClick={click} {...rest}>{children}</a>
}
