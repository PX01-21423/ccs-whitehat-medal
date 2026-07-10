import { Link } from 'react-router-dom'
import { SearchX } from 'lucide-react'
import CircuitFrame from '../components/CircuitFrame'

export default function NotFound({ officer = false }) {
  return (
    <section className="not-found page-pad">
      <CircuitFrame className="not-found-panel">
        <SearchX />
        <p>Verification unavailable</p>
        <h1>{officer ? 'Officer not found' : 'Page not found'}</h1>
        <span>{officer ? 'This URL does not match an official medal record.' : 'The requested page does not exist.'}</span>
        <Link className="button button-gold" to="/hall-of-fame">View Hall of Fame</Link>
      </CircuitFrame>
    </section>
  )
}
