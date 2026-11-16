import { useState } from 'react'
import { fmt } from '../data/content.js'
export default function CartDrawer({ cart, open, onClose }) {
  const [done, setDone] = useState(false)
  const place = () => { setDone(true); cart.clear() }
  return (
    <>
      <div className={`scrim ${open ? 'on' : ''}`} onClick={onClose} />
      <aside className={`drawer dk ${open ? 'on' : ''}`} aria-hidden={!open}>
        <div className="drawer-head"><h2>Your order</h2><button onClick={onClose}>Close</button></div>
        {cart.items.length === 0 ? <p className="empty">{done ? 'Order received. We will confirm shortly.' : 'Nothing here yet.'}</p> : (
          <ul>{cart.items.map((i) => (
            <li key={i.id}><div><h3>{i.name}</h3><span>{fmt(i.price * i.qty)}</span></div>
              <div className="qty"><button onClick={() => cart.dec(i.id)}>−</button><b>{i.qty}</b><button onClick={() => cart.add(i.id)}>+</button></div></li>))}</ul>)}
        {cart.items.length > 0 && <div className="drawer-foot"><div><span>Total</span><b>{fmt(cart.total)}</b></div><button className="btn" onClick={place}>Place order</button></div>}
      </aside>
    </>
  )
}
