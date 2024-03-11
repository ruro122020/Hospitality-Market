import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import { NavLink } from 'react-router-dom'


const Login = () => {
  const [showLogin, setShowLogin] = useState(true)
  return (
    <>
      {
        showLogin ? (
          <>
            <LoginForm />
            <p>
              Don't have an account? &nbsp;
              <NavLink to='/signup' onClick={() => setShowLogin(false)}> Sign Up</NavLink>
            </p>
          </>
        ) : (
          <>
            <SignupForm />
            <p>
              Already have an account? &nbsp;
              <NavLink to='/login' onClick={() => setShowLogin(true)}>Log In</NavLink>
            </p>
          </>
        )
      }
    </>
  )

}

export default Login
