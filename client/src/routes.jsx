import SignupForm from "./pages/SignupForm";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Services from './pages/Services'
import LoginForm from "./pages/LoginForm";
import Dashboard from "./pages/dashboard/Dashboard";
import Appointments from "./pages/dashboard/Appointments";
import DService from './pages/dashboard/userServices/DServices'
import AppointmentForm from "./components/AppointmentForm";
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
        path: '/user',
        element: <Dashboard />,
        children: [
          {
            path: '/user',
            element: <Appointments />
          },
          {
            path: '/user/services',
            element: <DService />
          },
          {
            path: '/user/appointment',
            element: <AppointmentForm />
          }
        ]
      },

    ]
  }

]

export default routes