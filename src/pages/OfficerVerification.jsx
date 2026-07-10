import { Link, useParams } from 'react-router-dom'
import { Check, Printer, ShieldCheck } from 'lucide-react'
import officers from '../data/officers'
import CircuitFrame from '../components/CircuitFrame'
import SafeImage from '../components/SafeImage'
import NotFound from './NotFound'

export default function OfficerVerification() {
  const { slug } = useParams()
  const officer = officers.find((item) => item.slug === slug)
  if (!officer) return <NotFound officer />

  return (
    <section className="certificate-page page-pad">
      <div className="certificate-tools">
        <Link to="/hall-of-fame/2026">← Back to Class of 2026</Link>
        <button onClick={() => window.print()}><Printer size={16} /> Print Certificate</button>
      </div>
      <CircuitFrame className="certificate">
        <header className="certificate-header">
          <div className="verified-seal"><ShieldCheck /></div>
          <p className="verified-label"><Check size={15} /> Verified Official Medal</p>
          <h1>CCS WhiteHat Club</h1>
          <h2>Certificate of Recognition</h2>
          <div className="gold-rule"><i /></div>
          <p className="motto">For Service. For Excellence. For the Club.</p>
        </header>

        <div className="certificate-subject">
          <div className="portrait-frame certificate-portrait">
            <SafeImage src={officer.photo} fallback="/officers/placeholder.svg" alt={`Official portrait of ${officer.name}`} />
          </div>
          <div className="recipient">
            <p>This recognition is proudly presented to</p>
            <h3>{officer.name}</h3>
            <span className="position">{officer.position}</span>
            <blockquote>
              “In recognition of your dedication, leadership, and commitment to advancing technology,
              knowledge, and community.”
            </blockquote>
            <dl>
              <div><dt>Academic years served</dt><dd>{officer.years}</dd></div>
              <div><dt>Official Medal ID</dt><dd>{officer.id}</dd></div>
            </dl>
          </div>
        </div>

        <div className="medal-gallery">
          <figure>
            <div className="medal-image"><SafeImage src={officer.medalFront} fallback="/medals/front-placeholder.svg" alt={`Service medal front for ${officer.name}`} /></div>
            <figcaption>Front</figcaption>
          </figure>
          <figure>
            <div className="medal-image"><SafeImage src={officer.medalBack} fallback="/medals/back-placeholder.svg" alt={`Service medal back for ${officer.name}`} /></div>
            <figcaption>Back</figcaption>
          </figure>
        </div>

        <aside className="verification-statement">
          <ShieldCheck />
          <p>This page serves as the official digital verification record of the CCS WhiteHat Club Service Medal awarded by the CCS WhiteHat Club, College of Computing Studies, Mindanao State University – Sulu.</p>
        </aside>
        <p className="certificate-footer">CCS WhiteHat Club | College of Computing Studies | Mindanao State University – Sulu</p>
      </CircuitFrame>
    </section>
  )
}
