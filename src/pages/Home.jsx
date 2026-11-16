import { IMAGES } from '../data/content.js'
import Hero from '../components/Hero.jsx'
import Marquee from '../components/Marquee.jsx'
import Menu from '../components/Menu.jsx'
import About from '../components/About.jsx'
import Visit from '../components/Visit.jsx'
import Photo from '../components/Photo.jsx'
import Reveal from '../components/Reveal.jsx'
import { Link } from '../router.jsx'
export default function Home({ cart }) {
  return (<>
    <Hero /><Marquee text="Breakfast · Lunch · Dinner · Private dining" />
    <Menu onAdd={cart.add} />
    <section className="feature dk">
      <Reveal><small>Now selling, discounted</small><h2 className="h2">European <em>hot dog</em></h2><p>The house hot dog, on offer while it lasts.</p><Link className="btn" to="/order">Order it</Link></Reveal>
      <Photo src={IMAGES.room} alt="A plate from The Manor kitchen" />
    </section>
    <section className="teaser"><Reveal as="h2" className="h2 rv-rise">Arcade</Reveal>
      <div className="grid4">{[IMAGES.a, IMAGES.b, IMAGES.room, IMAGES.about].map((s, i) => <Photo key={i} src={s} alt="Arcade gallery" />)}</div>
      <Link className="link" to="/arcade">See more</Link></section>
    <About /><Visit />
  </>)
}
