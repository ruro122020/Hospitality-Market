import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'
import { apiLogout } from '../api'


const Navbar = () => {
  //useAuth is from AuthContext.jsx file
  const { isLoggedIn, logout } = useAuth()

  const handleLogout = async () => {
    const success = await apiLogout()
    if (success) {
      logout()
    }
  }

  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/services'>Services</NavLink>
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
