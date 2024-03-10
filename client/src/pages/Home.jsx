import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../components/contexts/AuthContext'
const Home = () => {
  const [user, setUser] = useState(null)
  const { login } = useAuth
  useEffect(() => {
    fetch('/api/checksession')
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setUser(user)
            console.log('check session user', user)
          })
        }
      })
  }, [])

  return (
    <div>
      <h1>Marketplace Services</h1>
      <p>Here we pride ourselves with providing the best services from the best service providers</p>
      <p>Let's get started!</p>
      <NavLink to='/signup'>Get Started</NavLink>
    </div>

  )
}

export default Home
