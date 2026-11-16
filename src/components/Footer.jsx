import { useState } from 'react'
import { Link } from '../router.jsx'
import { ADDRESS } from '../data/content.js'
const EXPLORE = [['/', 'Home'], ['/order', 'Order now'], ['/about', 'About'], ['/arcade', 'Arcade'], ['/contact', 'Contact']]
const SOCIAL = [['Instagram', 'https://www.instagram.com/themanorrestaurantng/'], ['Facebook', 'https://www.facebook.com/TheManorRestaurant'], ['WhatsApp', '/contact'], ['X', '/contact']]
export default function Footer() {
  const [done, setDone] = useState(false)
  const join = (e) => { e.preventDefault(); const f = new FormData(e.target); if (/^\S+@\S+\.\S+$/.test(f.get('email')) && f.get('ok')) setDone(true) }
  return (
    <footer className="foot dk">
      <div className="foot-top">
        <div className="news">
          <h2 className="h2">Join the <em>table</em></h2>
          <p>New dishes, offers and evenings at The Manor, now and then.</p>
          {done ? <p className="thanks">You are on the list.</p> : (
            <form onSubmit={join} noValidate>
              <div className="field"><input name="email" type="email" placeholder="Email address" aria-label="Email address" /><button type="submit">Subscribe</button></div>
              <label className="consent"><input type="checkbox" name="ok" /> I consent to being contacted by email.</label>
            </form>)}
        </div>
        <div className="exp"><small>Experience The Manor</small>
          <Link className="big" to="/contact">Reserve a table</Link><Link className="big" to="/order">Order online</Link></div>
      </div>
      <div className="foot-cols">
        <ul><li><small>Explore</small></li>{EXPLORE.map(([t, l]) => <li key={t}><Link to={t}>{l}</Link></li>)}</ul>
        <ul><li><small>The Manor</small></li><li><Link to="/about#mission">Mission</Link></li><li><Link to="/about#vision">Vision</Link></li><li><Link to="/arcade">Gallery</Link></li></ul>
        <ul><li><small>Visit</small></li><li>{ADDRESS}</li><li>Mon to Fri, 7am to 9pm</li><li>Sat, 9am to 7pm</li></ul>
        <ul><li><small>Follow</small></li>{SOCIAL.map(([l, h]) => <li key={l}>{h.startsWith('/') ? <Link to={h}>{l}</Link> : <a href={h}>{l}</a>}</li>)}</ul>
      </div>
      <p className="giant" aria-hidden="true">The Manor</p>
      <div className="foot-legal"><span>© 2026 The Manor, Enugu. All rights reserved.</span><span>Not same old. Refined. Luxurious.</span></div>
    </footer>
  )
}
