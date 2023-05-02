import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import ErrorPage from './ErrorPage';
import Banner from './Components/Banner/Banner';
import Cards from './Components/Cards';
import Login from './Components/Login';
import Register from './Components/Register';
import Recipe from './Components/Recipe';
// import 'bootstrap/dist/css/bootstrap.min.css';

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
        element: <Cards />
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
        path: '/recipe',
        element: <Recipe />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
