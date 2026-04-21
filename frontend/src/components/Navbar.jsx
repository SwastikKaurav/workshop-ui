// Navbar component - shown on every page for navigation
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <h2 className="navbar-logo">FOSSEE</h2>

      {/* Navigation links using React Router Link */}
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  )
}

export default Navbar