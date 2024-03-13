import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Sessions from './pages/Sessions.jsx';
import Goals from './pages/Goals.jsx';
import Assignments from './pages/Assignments.jsx';
import Profile from './pages/Profile.jsx';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/sessions',
        element: <Sessions />
      },
      {
        path: '/goals',
        element: <Goals />
      },
      {
        path: '/assignments',
        element: <Assignments />
      },
      {
        path: '/profile',
        element: <Profile />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
