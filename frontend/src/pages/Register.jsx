// Register page - handles new user registration
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

function Register() {
  // Single state object for all form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'coordinator'
  })

  // Generic handler - updates only the changed field using input name
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register</h2>

        {/* Full name input */}
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
        </div>

        {/* Email input */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        {/* Password input */}
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>

        {/* Role selector - coordinator or instructor */}
        <div className="form-group">
          <label>Role</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="coordinator">Coordinator</option>
            <option value="instructor">Instructor</option>
          </select>
        </div>

        <button className="btn">Register</button>

        {/* Link to login page */}
        <p className="auth-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register