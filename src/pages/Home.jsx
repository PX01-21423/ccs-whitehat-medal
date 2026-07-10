import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import CircuitFrame from '../components/CircuitFrame'

export default function Home() {
  return (
    <section className="hero page-pad">
      <CircuitFrame className="hero-panel">
        <div className="medal-emblem" aria-hidden="true">
          <span className="ribbon" /><span className="medallion"><ShieldCheck /></span>
        </div>
        <h1>CCS WhiteHat Club<br /><span>Service Medal</span></h1>
        <p className="hero-subtitle">Official Digital Verification System</p>
        <div className="gold-rule"><i /></div>
        <p className="hero-description">
          Each service medal carries a unique QR code linked to an officer’s official digital certificate.
          Scan, confirm, and honor a record of service.
        </p>
        <div className="hero-actions">
          <Link className="button button-outline" to="/hall-of-fame">View Hall of Fame <ArrowRight size={17} /></Link>
        </div>
        <p className="trust-line"><ShieldCheck size={15} /> Official record of the College of Computing Studies</p>
      </CircuitFrame>
    </section>
  )
}
