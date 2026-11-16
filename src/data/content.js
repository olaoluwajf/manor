// Prices and hours come from the live site. Items marked placeholder need real details from the restaurant.
const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`
export const IMAGES = {
  room: img('photo-1504674900247-0877df9cc836'),
  about: img('photo-1525351484163-7529414344d8'),
  a: img('photo-1476224203421-9ac39bcb3327'),
  b: img('photo-1550547660-d9450f859349'),
}
export const HERO_VIDEO = 'https://www.pexels.com/download/video/31750566/' // placeholder loop: replace public/hero.mp4 with real footage (8 to 15s, under 3MB)
export const MENU = [
  { id: 'eng', name: 'Full English Breakfast', price: 6000, tag: 'Breakfast',
    desc: 'Eggs your way, baked beans, bacon, toasted bread, with coffee or orange juice.', image: img('photo-1525351484163-7529414344d8') },
  { id: 'dog', name: 'European Hot Dog', price: 4500, tag: 'Now discounted', // placeholder price
    desc: 'The house hot dog, currently on offer.', image: img('photo-1550547660-d9450f859349') },
  { id: 'noo', name: 'Korean Noodles', price: 7000, tag: 'Mains', // placeholder price
    desc: 'Hot, glossy noodles finished at the pass.', image: img('photo-1476224203421-9ac39bcb3327') },
  { id: 'grl', name: 'Chef’s Plate', price: 9500, tag: 'Mains', // placeholder item
    desc: 'A rotating plate from the kitchen. Ask your server.', image: img('photo-1504674900247-0877df9cc836') },
]
export const HOURS = [['Monday to Friday', '7am to 9pm'], ['Saturday', '9am to 7pm']]
export const ADDRESS = 'No 18 New Haven, Enugu'
export const fmt = (n) => '₦' + n.toLocaleString('en-NG')
