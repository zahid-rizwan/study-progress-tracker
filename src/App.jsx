
import SideBar from "./components/SideBar";
import DashBoard from "./components/DashBoard";
import { useState } from "react";
const App = () => {
  const [sidebarToggle,setSidebarToggle]=useState(false)

  return (
    <div className="flex">
      <SideBar sidebarToggle={sidebarToggle}/>
      <DashBoard sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}/>
    </div>
  );
};
export default App;