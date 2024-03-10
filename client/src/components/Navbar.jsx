import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'

const Navbar = () => {
  //useAuth is from AuthContext.jsx file
  const { isLoggedIn, logout } = useAuth()
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/signup'>Signup</NavLink>
      {
        isLoggedIn ? (
          <NavLink to='/' onClick={logout}>Logout</NavLink>
        ) : (
          <NavLink to='/login'>Login</NavLink>)
      }

    </nav>
  )
}

export default Navbar
