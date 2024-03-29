import SignupForm from "./pages/SignupForm";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Services from './pages/Services'
import LoginForm from "./pages/LoginForm";
import Dashboard from "./pages/dashboard/Dashboard";
import Appointments from "./pages/dashboard/userAppt/Appointments";
import DService from './pages/dashboard/userServices/DServices'
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
          }
        ]
      },

    ]
  }

]

export default routes