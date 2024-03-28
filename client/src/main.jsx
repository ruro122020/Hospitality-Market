import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes'
import { AuthProvider } from './components/contexts/AuthContext'
import { UserProvider } from './components/contexts/UserContext'
const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </AuthProvider>
)
