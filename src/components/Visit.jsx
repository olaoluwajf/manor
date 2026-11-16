import { HOURS, ADDRESS } from '../data/content.js'
import Reveal from './Reveal.jsx'
export default function Visit() {
  return (
    <section id="visit" className="visit dk">
      <Reveal as="h2" className="h2 rv-rise">Location and <em>hours</em></Reveal>
      <dl>{HOURS.map(([d, h]) => <div key={d}><dt>{d}</dt><dd>{h}</dd></div>)}<div><dt>Find us</dt><dd>{ADDRESS}</dd></div></dl>
      <a className="btn" href={`https://maps.google.com/?q=${encodeURIComponent('The Manor Restaurant ' + ADDRESS)}`}>Get directions</a>
    </section>
  )
}
