import HeroVideo from './HeroVideo.jsx'
import { Link } from '../router.jsx'
const Line = ({ children, d }) => <span className="line"><span style={{ animationDelay: `${d}ms` }}>{children}</span></span>
export default function Hero() {
  return (
    <section id="top" className="hero dk">
      <HeroVideo /><div className="hero-shade" />
      <div className="hero-body">
        <h1><Line d={60}>fine dining, enugu</Line></h1>
        <div className="hero-meta">
          <p className="lede">Breakfast through dinner, plated with care, in a room built for long tables and quiet conversation.</p>
          <div className="actions"><Link className="btn" to="/order">Order now</Link><Link className="link" to="/contact">Make a reservation</Link></div>
        </div>
      </div>
    </section>
  )
}
