import { Link } from '../router.jsx'
const LINKS = [['/', 'Home'], ['/order', 'Order now'], ['/about', 'About'], ['/arcade', 'Arcade'], ['/contact', 'Contact']]
export default function Nav({ count, onCart, path }) {
  return (
    <header className="nav dk">
      <Link to="/" className="wordmark">The Manor</Link>
      <nav>{LINKS.map(([to, l]) => <Link key={to} to={to} className={path === to ? 'cur' : ''}>{l}</Link>)}</nav>
      <button className="cart-btn" onClick={onCart} aria-label={`Open cart, ${count} items`}>
        Cart <span className="odo"><span key={count} className="odo-n">{count}</span></span>
      </button>
    </header>
  )
}
