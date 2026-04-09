import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'coordinator'
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <h2>Register</h2>

      <div>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
      </div>

      <div>
        <label>Role</label>
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="coordinator">Coordinator</option>
          <option value="instructor">Instructor</option>
        </select>
      </div>

      <button>Register</button>

      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  )
}

export default Register