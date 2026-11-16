import PageHead from '../components/PageHead.jsx'
import Menu from '../components/Menu.jsx'
export default function Order({ cart }) {
  return (<><PageHead eyebrow="Order now" title="Order">Build your order, then place it from the cart.</PageHead><Menu onAdd={cart.add} chips /></>)
}
