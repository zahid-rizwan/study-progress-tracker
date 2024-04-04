import React from 'react'
import { useState } from "react";
import SideBar from '../components/SideBar';
import DashBoard from '../components/DashBoard';



const Main = () => {
    const [sidebarToggle,setSidebarToggle]=useState(false)
  return (
    <div className="flex">
      {/* <SideBar sidebarToggle={sidebarToggle}/>
      <DashBoard sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}/> */}
    
    <SideBar sidebarToggle={sidebarToggle}/>
    <DashBoard setSidebarToggle={setSidebarToggle}/>
      
    </div>
  )
}

export default Main