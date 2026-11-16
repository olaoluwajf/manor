import { IMAGES } from '../data/content.js'
import Photo from './Photo.jsx'
import Reveal from './Reveal.jsx'
export default function About() {
  return (
    <section id="about" className="about">
      <Photo src={IMAGES.about} alt="Breakfast at The Manor" />
      <Reveal className="about-copy rv-rise"><h2 className="h2">Privacy and <em>luxury.</em></h2>
        <p>We dine for love, luxury and class. The Manor is a place to slow down, with service that stays out of the way until you need it.</p></Reveal>
    </section>
  )
}
