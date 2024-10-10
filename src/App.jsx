
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layout/AppLayout'
import LandingPage from './pages/LandingPage'
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import LinkPage from './pages/LinkPage';
import RedirectLink from './pages/RedirectLink';


function App() {

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },

        {
          path: "/auth",
          element: <Auth />,
        },

        {
          path: "/dashboard",
          element: <Dashboard />,
        },

        {
          path: "/link/:id",
          element: <LinkPage />,
        },

        {
          path: "/:id",
          element: <RedirectLink />,
        },
      ],
    },
  ]);
 

  return (
    <RouterProvider router={router} />
  )
}

export default App
