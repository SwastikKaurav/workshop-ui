// Main App component - handles routing between pages
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import WorkshopDetail from './pages/WorkshopDetail'
import Profile from './pages/Profile'

function App() {
  return (
    <>
      {/* Navbar shown on all pages */}
      <Navbar />

      {/* Route definitions - each path maps to a page component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/workshop/:id" element={<WorkshopDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {/* Footer shown on all pages */}
      <Footer />
    </>
  )
}

export default App