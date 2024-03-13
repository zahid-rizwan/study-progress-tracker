import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import Reports from './pages/Reports.jsx';
import Inbox from './pages/Inbox.jsx';
import Setting from './pages/Setting.jsx'; // Import the Setting component

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
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: '/reports',
        element: <Reports />
      },
      {
        path: '/inbox',
        element: <Inbox />
      },
      {
        path: '/setting',
        element: <Setting />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
