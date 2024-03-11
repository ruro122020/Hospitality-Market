import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

//Custom Hook
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null)

  const login = () => setIsLoggedIn(true)
  const logout = () => setIsLoggedIn(false)

  return (
    <div>
      <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
        {children}
      </AuthContext.Provider>

    </div>
  )
}

