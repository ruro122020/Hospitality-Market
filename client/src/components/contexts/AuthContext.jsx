import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

//Custom Hook
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = () => setIsLoggedIn(true)
  const logout = () => {
    fetch('/api/logout', {
      method: 'DELETE'
    })
      .then((res) => {
        if (res.ok) {
          setIsLoggedIn(false)
        }
      })
      .catch(error => console.log('error', error))
  }

  return (
    <div>
      <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
        {children}
      </AuthContext.Provider>

    </div>
  )
}

