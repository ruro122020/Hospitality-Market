import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../components/contexts/AuthContext'

const Home = () => {
  const { isLoggedIn } = useAuth()
  return (
    <div>
      <h1>Marketplace Services</h1>
      <p>Here we pride ourselves with providing the best services from the best service providers</p>
      <p>Let's get started!</p>
      <NavLink to={isLoggedIn ? '/services' : '/login'}>Get Started</NavLink>
    </div>

  )
}

export default Home
