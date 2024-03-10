import SignupForm from "./pages/SignupForm";
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
        path: '/signup',
        element: <SignupForm />
      },
      {
        path: '/services',
        element: <Services />
      }
    ]
  }
]

export default routes