import './Profile.css'

function Profile() {
  const user = {
    name: 'Swastik Kaurav',
    email: 'swastik@example.com',
    role: 'Coordinator',
    college: 'IIT Bombay',
    city: 'Mumbai',
    state: 'Maharashtra',
    workshopsBooked: 3
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            {user.name.charAt(0)}
          </div>
          <h1>{user.name}</h1>
          <span className="profile-role">{user.role}</span>
        </div>

        <div className="profile-info">
          <div className="info-item">
            <strong>Email</strong>
            <p>{user.email}</p>
          </div>
          <div className="info-item">
            <strong>College</strong>
            <p>{user.college}</p>
          </div>
          <div className="info-item">
            <strong>City</strong>
            <p>{user.city}</p>
          </div>
          <div className="info-item">
            <strong>State</strong>
            <p>{user.state}</p>
          </div>
          <div className="info-item">
            <strong>Workshops Booked</strong>
            <p>{user.workshopsBooked}</p>
          </div>
        </div>

        <button className="btn">Edit Profile</button>
      </div>
    </div>
  )
}

export default Profile