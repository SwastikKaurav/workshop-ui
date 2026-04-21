// Profile page - displays logged in user information
import './Profile.css'

function Profile() {
  // Static user data - would come from API in production
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
        {/* Profile header with avatar */}
        <div className="profile-header">
          {/* Avatar shows first letter of name */}
          <div className="profile-avatar">
            {user.name.charAt(0)}
          </div>
          <h1>{user.name}</h1>
          <span className="profile-role">{user.role}</span>
        </div>

        {/* User details section */}
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