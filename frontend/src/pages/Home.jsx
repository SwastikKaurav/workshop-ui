import { Link } from 'react-router-dom'

function Home() {
  const workshops = [
    { id: 1, title: 'Python', duration: '2 days', level: 'Beginner' },
    { id: 2, title: 'Django', duration: '3 days', level: 'Intermediate' },
    { id: 3, title: 'Scilab', duration: '2 days', level: 'Beginner' },
    { id: 4, title: 'OpenFOAM', duration: '3 days', level: 'Advanced' },
  ]

  return (
    <div>
      <h1>Available Workshops</h1>
      <div>
        {workshops.map(workshop => (
          <div key={workshop.id}>
            <h3>{workshop.title}</h3>
            <p>Duration: {workshop.duration}</p>
            <p>Level: {workshop.level}</p>
            <Link to={`/workshop/${workshop.id}`}>
              <button>Book Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home