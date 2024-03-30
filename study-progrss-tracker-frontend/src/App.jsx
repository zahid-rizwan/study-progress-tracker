
// import SideBar from "./components/SideBar";
// import DashBoard from "./components/DashBoard";
import { useState } from "react";
// import Assignments from "./pages/Assignments";
import LandingPage from "./components/LandingPage";
import HomeNav from "./components/HomeNav";
const App = () => {
  const [sidebarToggle,setSidebarToggle]=useState(false)

  return (
    <div className="flex">
      {/* <SideBar sidebarToggle={sidebarToggle}/>
      <DashBoard sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}/> */}
      <HomeNav/>
      <LandingPage/>
    
    </div>
  );
};
export default App;