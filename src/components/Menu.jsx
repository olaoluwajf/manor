import { useState } from 'react'
import { MENU, fmt } from '../data/content.js'
import { useReveal } from '../hooks/useReveal.js'
import Reveal from './Reveal.jsx'
export default function Menu({ onAdd, chips = false }) {
  const [tag, setTag] = useState('All'); const [just, setJust] = useState(null)
  const tags = ['All', ...new Set(MENU.map((m) => m.tag))]
  const list = MENU.filter((m) => tag === 'All' || m.tag === tag)
  const [pick, setPick] = useState(MENU[0]); const active = list.includes(pick) ? pick : list[0]
  const ref = useReveal()
  const add = (id) => { onAdd(id); setJust(id); setTimeout(() => setJust((j) => (j === id ? null : j)), 1100) }
  return (
    <section id="menu" className="menu">
      {chips ? <div className="chips">{tags.map((t) => <button key={t} className={t === tag ? 'on' : ''} onClick={() => setTag(t)}>{t}</button>)}</div>
        : <Reveal as="h2" className="h2 rv-rise">Our <em>menu</em></Reveal>}
      <div className="menu-grid">
        <ul ref={ref} className="menu-list">
          {list.map((m, i) => (
            <li key={m.id} className={m.id === active.id ? 'on' : ''} style={{ '--i': i }} onMouseEnter={() => setPick(m)} onFocus={() => setPick(m)}>
              <div className="row">
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <div className="info"><small>{m.tag}</small><h3>{m.name}</h3><p>{m.desc}</p></div>
                <div className="price"><span>{fmt(m.price)}</span><button className={just === m.id ? 'done' : ''} onClick={() => add(m.id)}>{just === m.id ? 'Added' : 'Add'}</button></div>
              </div>
            </li>
          ))}
        </ul>
        <div className="menu-preview" aria-hidden="true">
          {list.map((m) => <img key={m.id} src={m.image} alt="" className={m.id === active.id ? 'show' : ''} />)}
        </div>
      </div>
    </section>
  )
}
