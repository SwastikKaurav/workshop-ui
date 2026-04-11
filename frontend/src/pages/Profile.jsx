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
    <div>
      <h1>My Profile</h1>

      <div>
        <h3>{user.name}</h3>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>College:</strong> {user.college}</p>
        <p><strong>City:</strong> {user.city}</p>
        <p><strong>State:</strong> {user.state}</p>
        <p><strong>Workshops Booked:</strong> {user.workshopsBooked}</p>
      </div>

      <button>Edit Profile</button>
    </div>
  )
}

export default Profile