import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Sessions from "./pages/Sessions.jsx";
import Goals from "./pages/Goals.jsx";
import Assignments from "./pages/Assignments.jsx";
import Profile from "./pages/Profile.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import LandingPage from "./components/LandingPage.jsx";
import LogIn from "./pages/LogIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import DashBoard from "./components/DashBoard.jsx";
import Main from "./pages/Main.jsx";
import ServicePage from "./pages/ServicePage.jsx"
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/service",
        element:<ServicePage/>
      },
      {
        path: "/goals",
        element: <Goals />,
      },
      {
        path: "/assignments",
        element: <Assignments />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/about",
        element: <AboutUsPage />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/student",
    element: <Main/>,
    children: [
      {
        path: "/student",
        element: <Sessions />,
      },
      {
        path: "/student/goals",
        element: <Goals />,
      },
      {
        path: "/student/assignments",
        element: <Assignments />,
      },
      {
        path: "/student/profile",
        element:<Profile/>,
      }
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
