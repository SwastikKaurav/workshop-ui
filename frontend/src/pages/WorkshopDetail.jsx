import { useParams, Link } from 'react-router-dom'
import './WorkshopDetail.css'

const workshops = [
  { id: 1, title: 'Python', duration: '2 days', level: 'Beginner', description: 'Learn Python programming from scratch. Covers basics, data structures and file handling.', instructor: 'Dr. Anil Kumar' },
  { id: 2, title: 'Django', duration: '3 days', level: 'Intermediate', description: 'Build web applications using Django. Covers models, views, templates and REST APIs.', instructor: 'Prof. Meera Sharma' },
  { id: 3, title: 'Scilab', duration: '2 days', level: 'Beginner', description: 'Introduction to Scilab for numerical computing and simulations.', instructor: 'Dr. Rahul Verma' },
  { id: 4, title: 'OpenFOAM', duration: '3 days', level: 'Advanced', description: 'Computational fluid dynamics using OpenFOAM for engineering students.', instructor: 'Prof. Suresh Nair' },
]

function WorkshopDetail() {
  const { id } = useParams()
  const workshop = workshops.find(w => w.id === parseInt(id))

  if (!workshop) return <h2 className="not-found">Workshop not found</h2>

  return (
    <div className="detail-container">
      <div className="detail-card">
        <h1>{workshop.title} Workshop</h1>
        <div className="detail-info">
          <p><strong>Duration:</strong> {workshop.duration}</p>
          <p><strong>Level:</strong> {workshop.level}</p>
          <p><strong>Instructor:</strong> {workshop.instructor}</p>
        </div>
        <p className="detail-description">{workshop.description}</p>
        <button className="btn">Book This Workshop</button>
        <Link to="/" className="back-link">← Back to Workshops</Link>
      </div>
    </div>
  )
}

export default WorkshopDetail