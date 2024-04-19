import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../components/contexts/AuthContext'
import Button from '@mui/material/Button'
const Home = () => {
  const { isLoggedIn } = useAuth()
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      background: 'black',
      color: 'white',
      position: 'fixed',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      zIndex: 10
    }}>
      <div style={{ paddingTop: '60px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <h1>Service Market</h1>
        <p>Here we pride ourselves with providing the best services from the best service providers</p>
        <p>Let's get started!</p>
        <Button to={isLoggedIn ? '/services' : '/signup'}>Get Started</Button>
      </div>
    </div>
  )
}

export default Home
