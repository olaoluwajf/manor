import { IMAGES } from '../data/content.js'
import PageHead from '../components/PageHead.jsx'
import Photo from '../components/Photo.jsx'
// placeholder gallery: swap in real arcade photos
const SHOTS = [IMAGES.a, IMAGES.b, IMAGES.room, IMAGES.about, IMAGES.b, IMAGES.a]
export default function Arcade() {
  return (<><PageHead eyebrow="Gallery" title="Arcade">Moments from the room.</PageHead>
    <section className="gallery">{SHOTS.map((s, i) => <Photo key={i} src={s} alt={`Gallery ${i + 1}`} className={i % 3 === 0 ? 'tall' : ''} />)}</section></>)
}
