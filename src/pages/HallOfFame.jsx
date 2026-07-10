import officers from '../data/officers'
import OfficerCard from '../components/OfficerCard'

export default function HallOfFame() {
  return (
    <section className="page page-pad">
      <header className="page-heading">
        <p>Distinguished Service</p>
        <h1>Hall of Fame</h1>
        <span>Honoring the officers whose leadership and commitment strengthened the CCS WhiteHat Club.</span>
      </header>
      <div className="officer-grid">
        {officers.map((officer) => <OfficerCard officer={officer} key={officer.id} />)}
      </div>
    </section>
  )
}
