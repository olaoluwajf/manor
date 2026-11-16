import { useEffect } from 'react'
import PageHead from '../components/PageHead.jsx'
import About from '../components/About.jsx'
import Reveal from '../components/Reveal.jsx'
const BLOCKS = [['mission', 'Mission', 'To serve refined food in a room that feels private, calm and generous.'], ['vision', 'Vision', 'To be the place in Enugu people choose when the occasion matters.']]
export default function AboutPage() {
  useEffect(() => { const h = location.hash.slice(1); if (h) document.getElementById(h)?.scrollIntoView() }, [])
  return (<><PageHead eyebrow="About us" title="The Manor">Not same old. Refined and luxurious.</PageHead><About />
    <section className="mv">{BLOCKS.map(([id, t, p]) => <Reveal key={id} id={id} className="rv-rise"><small>{t}</small><p>{p}</p></Reveal>)}</section></>)
}
