import SignupForm from "./pages/SignupForm";
import Login from './pages/Login'
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Services from './pages/Services'

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/signup',
        element: <SignupForm />
      },
      {
        path: '/login',
        element: <Login />
      }

    ]
  }
]

export default routes