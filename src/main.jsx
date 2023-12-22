import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from './Layout/Layout.jsx';
import Home from './Component/Homepage/Home/Home.jsx';
import Login from './Component/Authentication/Login/Login.jsx';
import Register from './Component/Authentication/Register/Register.jsx';
import NotFound from './Component/NotFound/NotFound.jsx';
import AuthProvider from './Component/Authentication/AuthProvider/AuthProvider.jsx';
import Dashboard from './Component/Dashboard/Dashboard.jsx';
import PrivateRoute from './Component/Authentication/PrivateRoute/PrivateRoute.jsx';
import Task from './Component/Dashboard/Task.jsx';
import FAQ from './Component/FAQ/faq.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        loader: ()=> fetch('https://td-task-server.vercel.app/task')
      },
      {
        path: '/task',
        element: <Task></Task>,
        loader: ()=> fetch('https://td-task-server.vercel.app/task')
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
        <RouterProvider router={router} />
  </AuthProvider>
)
