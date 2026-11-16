import { useReducer, useEffect, useMemo } from 'react'
const KEY = 'manor-cart'
const reduce = (s, a) => {
  switch (a.type) {
    case 'add': return { ...s, [a.id]: (s[a.id] || 0) + 1 }
    case 'dec': { const n = (s[a.id] || 0) - 1; const { [a.id]: _, ...rest } = s; return n > 0 ? { ...rest, [a.id]: n } : rest }
    case 'clear': return {}
    default: return s
  }
}
const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {} } catch { return {} } }
export function useCart(menu) {
  const [lines, dispatch] = useReducer(reduce, undefined, load)
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(lines)) } catch {} }, [lines])
  return useMemo(() => {
    const items = menu.filter((m) => lines[m.id]).map((m) => ({ ...m, qty: lines[m.id] }))
    return { items, count: items.reduce((a, i) => a + i.qty, 0), total: items.reduce((a, i) => a + i.qty * i.price, 0),
      add: (id) => dispatch({ type: 'add', id }), dec: (id) => dispatch({ type: 'dec', id }), clear: () => dispatch({ type: 'clear' }) }
  }, [lines, menu])
}
