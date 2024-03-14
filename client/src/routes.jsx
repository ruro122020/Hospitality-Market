import SignupForm from "./pages/SignupForm";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Services from './pages/Services'
import LoginForm from "./pages/LoginForm";

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
      }
    ]
  }

]

export default routes