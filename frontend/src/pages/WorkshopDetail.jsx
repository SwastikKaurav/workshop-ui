// Workshop Detail page - shows full info about a selected workshop
import { useParams, Link } from 'react-router-dom'
import './WorkshopDetail.css'

// Static workshop data - would come from API in production
const workshops = [
  { id: 1, title: 'Python', duration: '2 days', level: 'Beginner', description: 'Learn Python programming from scratch. Covers basics, data structures and file handling.', instructor: 'Dr. Anil Kumar' },
  { id: 2, title: 'Django', duration: '3 days', level: 'Intermediate', description: 'Build web applications using Django. Covers models, views, templates and REST APIs.', instructor: 'Prof. Meera Sharma' },
  { id: 3, title: 'Scilab', duration: '2 days', level: 'Beginner', description: 'Introduction to Scilab for numerical computing and simulations.', instructor: 'Dr. Rahul Verma' },
  { id: 4, title: 'OpenFOAM', duration: '3 days', level: 'Advanced', description: 'Computational fluid dynamics using OpenFOAM for engineering students.', instructor: 'Prof. Suresh Nair' },
]

function WorkshopDetail() {
  // Get workshop id from URL params
  const { id } = useParams()

  // Find matching workshop from array
  const workshop = workshops.find(w => w.id === parseInt(id))

  // Show error if workshop not found
  if (!workshop) return <h2 className="not-found">Workshop not found</h2>

  return (
    <div className="detail-container">
      <div className="detail-card">
        <h1>{workshop.title} Workshop</h1>

        {/* Workshop info section */}
        <div className="detail-info">
          <p><strong>Duration:</strong> {workshop.duration}</p>
          <p><strong>Level:</strong> {workshop.level}</p>
          <p><strong>Instructor:</strong> {workshop.instructor}</p>
        </div>

        {/* Workshop description */}
        <p className="detail-description">{workshop.description}</p>

        <button className="btn">Book This Workshop</button>

        {/* Back to home link */}
        <Link to="/" className="back-link">← Back to Workshops</Link>
      </div>
    </div>
  )
}

export default WorkshopDetail