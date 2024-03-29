import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { apiCheckSession } from '../api'
import { useAuth } from './contexts/AuthContext'
import { useUser } from './contexts/UserContext'
const Layout = () => {
  const { login, isLoggedIn, logout } = useAuth()
  const { setUser } = useUser()
  useEffect(() => {
    const checkSession = async () => {
      const loggedInUser = await apiCheckSession()
      if (loggedInUser) {
        login()
        setUser(loggedInUser)
      } else {
        logout()
      }
    }
    checkSession()
  }, [])

  if (isLoggedIn === null) return <p>loading ...</p>

  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
