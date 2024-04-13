
import SideBar from "./components/SideBar";
import DashBoard from "./components/DashBoard";
import { useState } from "react";
// import Assignments from "./pages/Assignments";
import LandingPage from "./components/LandingPage";
import HomeNav from "./components/HomeNav";
import { Outlet } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify";
import Navbar1 from "./components/Navbar1";
import MyCarousel from "./components/MyCarousel";


const App = () => {
  const [sidebarToggle,setSidebarToggle]=useState(false)

  return (
    <div>
      {/* <SideBar sidebarToggle={sidebarToggle}/>
      <DashBoard sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}/> */}
      {/* <HomeNav/> */}
      <Navbar1/>
      <Outlet/>
      {/* <MyCarousel/> */}
      <ToastContainer/>
      
    </div>
  );
};
export default App;