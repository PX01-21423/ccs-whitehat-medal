import { Link, useParams } from 'react-router-dom'
import { ArrowRight, GraduationCap } from 'lucide-react'
import officers from '../data/officers'
import OfficerCard from '../components/OfficerCard'

const graduateClasses = [
  {
    year: '2026',
    title: 'Class of 2026',
    subtitle: 'Service Medal recipients and CCS WhiteHat Club officers recognized for the 2025–2026 graduating class.',
  },
]

export default function HallOfFame() {
  const { classYear } = useParams()
  const selectedClass = graduateClasses.find((item) => item.year === classYear)

  if (!selectedClass) {
    return (
      <section className="page page-pad">
        <header className="page-heading">
          <p>Graduate Classes</p>
          <h1>Hall of Fame</h1>
          <span>Select a graduating class to view the officers, medals, and official verification records.</span>
        </header>

        <div className="class-grid">
          {graduateClasses.map((graduateClass) => (
            <Link className="class-card" to={`/hall-of-fame/${graduateClass.year}`} key={graduateClass.year}>
              <div className="class-icon"><GraduationCap /></div>
              <div>
                <p>Graduates</p>
                <h2>{graduateClass.title}</h2>
                <span>{graduateClass.subtitle}</span>
              </div>
              <ArrowRight className="class-arrow" />
            </Link>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="page page-pad">
      <header className="page-heading">
        <p>Graduates</p>
        <h1>{selectedClass.title}</h1>
        <span>{selectedClass.subtitle}</span>
      </header>
      <div className="class-tools">
        <Link to="/hall-of-fame">← Back to graduate classes</Link>
        <span>{officers.length} verified officers</span>
      </div>
      <div className="officer-grid">
        {officers.map((officer) => <OfficerCard officer={officer} key={officer.id} />)}
      </div>
    </section>
  )
}
