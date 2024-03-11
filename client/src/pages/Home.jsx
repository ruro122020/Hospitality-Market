import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {


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
