import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import ErrorPage from './ErrorPage';
import Cards from './Components/Home/Cards';
import Login from './Components/Login';
import Register from './Components/Register';
import Recipe from './Components/Recipe';
import Banner from './Components/Home/Banner/Banner';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Blogs from './Components/Blog/Blogs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />, 
    children: [
      {
        path: '/',
        element: <Banner />
      },
      {
        path: 'cards',
        element: <Cards />,
        loader: () => fetch("https://chef-recipe-hunter-server-side-rahatul99.vercel.app/chef")
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/recipe/:id',
        element: <PrivateRoute><Recipe /></PrivateRoute>,
        loader: ({params}) => fetch(`https://chef-recipe-hunter-server-side-rahatul99.vercel.app/chef/${params.id}`)
      },
      {
        path: '/blogs',
        element: <Blogs />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
