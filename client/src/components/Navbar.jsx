import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'
import { apiLogout } from '../api'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  //useAuth is from AuthContext.jsx file
  const { isLoggedIn, logout } = useAuth()
  const navigate = useNavigate()
  const handleLogout = async () => {
    const success = await apiLogout()
    console.log('success', success)
    if (success) {
      logout()
    }

  }
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/signup'>Signup</NavLink>
      {
        isLoggedIn ? (
          <NavLink to='/' onClick={handleLogout}>Logout</NavLink>
        ) : (
          <NavLink to='/login'>Login</NavLink>)
      }

    </nav>
  )
}

export default Navbar
