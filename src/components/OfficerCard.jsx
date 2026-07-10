import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import SafeImage from './SafeImage'

export default function OfficerCard({ officer }) {
  return (
    <article className="officer-card">
      <div className="portrait-frame">
        <SafeImage src={officer.photo} fallback="/officers/placeholder.svg" alt={`Portrait of ${officer.name}`} />
      </div>
      <div className="officer-card-copy">
        <p className="position">{officer.position}</p>
        <h2>{officer.name}</h2>
        <dl>
          <div><dt>Service</dt><dd>{officer.years}</dd></div>
          <div><dt>Medal ID</dt><dd>{officer.id}</dd></div>
        </dl>
        <Link className="button button-outline full" to={`/officer/${officer.slug}`}>
          View Certificate <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  )
}
