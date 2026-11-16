import { useState } from 'react'
import { MENU } from './data/content.js'
import { useCart } from './hooks/useCart.js'
import { usePath, Link } from './router.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import Home from './pages/Home.jsx'
import Order from './pages/Order.jsx'
import AboutPage from './pages/AboutPage.jsx'
import Arcade from './pages/Arcade.jsx'
import Contact from './pages/Contact.jsx'
const NotFound = () => <section className="nf"><h1 className="h2">Not on the menu.</h1><Link className="btn" to="/">Back home</Link></section>
const ROUTES = { '/': Home, '/order': Order, '/about': AboutPage, '/arcade': Arcade, '/contact': Contact }
export default function App() {
  const cart = useCart(MENU); const [open, setOpen] = useState(false)
  const path = usePath().replace(/\.html$/, '').replace(/(.)\/$/, '$1').replace('/about-us', '/about'); const Page = ROUTES[path] || NotFound
  return (<>
    <Nav count={cart.count} onCart={() => setOpen(true)} path={path} />
    <main key={path} className="page"><Page cart={cart} /></main>
    <Footer /><CartDrawer cart={cart} open={open} onClose={() => setOpen(false)} />
  </>)
}
