// Home page - displays all available workshops as cards
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  // Static workshop data - would come from API in production
  const workshops = [
    { id: 1, title: 'Python', duration: '2 days', level: 'Beginner' },
    { id: 2, title: 'Django', duration: '3 days', level: 'Intermediate' },
    { id: 3, title: 'Scilab', duration: '2 days', level: 'Beginner' },
    { id: 4, title: 'OpenFOAM', duration: '3 days', level: 'Advanced' },
  ]

  return (
    <div className="home">
      {/* Hero section */}
      <div className="home-hero">
        <h1>Welcome to FOSSEE Workshops</h1>
        <p>Book free workshops conducted by IIT Bombay experts</p>
      </div>

      {/* Workshop cards grid */}
      <div className="workshops-grid">
        {/* Loop through workshops and render a card for each */}
        {workshops.map(workshop => (
          <div key={workshop.id} className="workshop-card">
            <h3>{workshop.title}</h3>
            <p>Duration: {workshop.duration}</p>
            <p>Level: {workshop.level}</p>
            {/* Link to individual workshop detail page */}
            <Link to={`/workshop/${workshop.id}`}>
              <button className="btn">Book Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home