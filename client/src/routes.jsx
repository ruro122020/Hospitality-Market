import SignupForm from "./pages/SignupForm";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

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
      }
    ]
  }
]

export default routes