import SignupForm from "./pages/SignupForm";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Services from './pages/Services'
import LoginForm from "./pages/LoginForm";
import Dashboard from "./pages/dashboard/Dashboard";
import Appointments from "./pages/dashboard/Appointments";
import ServiceDashboard from './pages/dashboard/ServicesDashboard'
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
        element: <LoginForm />
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          {
            path: '/dashboard/appointments',
            element: <Appointments />

          },
          {
            path: '/dashboard/services',
            element: <ServiceDashboard />
          }
        ]
      }
    ]
  }

]

export default routes