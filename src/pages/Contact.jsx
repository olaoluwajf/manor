import { useState } from 'react'
import PageHead from '../components/PageHead.jsx'
import Visit from '../components/Visit.jsx'
export default function Contact() {
  const [sent, setSent] = useState(false); const [err, setErr] = useState('')
  const submit = (e) => { e.preventDefault(); const d = Object.fromEntries(new FormData(e.target))
    if (!d.name.trim() || !/^\S+@\S+\.\S+$/.test(d.email)) return setErr('Enter your name and a valid email.'); setErr(''); setSent(true) }
  return (<><PageHead eyebrow="Contact" title="Reserve">Tell us when you are coming and how many you are bringing.</PageHead>
    <section className="contact">
      {sent ? <p className="done">Thank you. We will confirm your reservation shortly.</p> : (
        <form onSubmit={submit} noValidate>
          <label>Name<input name="name" autoComplete="name" /></label>
          <label>Email<input name="email" type="email" autoComplete="email" /></label>
          <div className="two"><label>Date<input name="date" type="date" /></label><label>Guests<input name="guests" type="number" min="1" defaultValue="2" /></label></div>
          <label>Message<textarea name="message" rows="4" /></label>
          {err && <p className="err" role="alert">{err}</p>}
          <button className="btn" type="submit">Send request</button>
        </form>)}
    </section><Visit /></>)
}
