// Login page - handles user login with controlled inputs
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

function Login() {
  // State for email and password inputs
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>

        {/* Email input - controlled component */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        {/* Password input - controlled component */}
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <button className="btn">Login</button>

        {/* Link to register page */}
        <p className="auth-link">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login