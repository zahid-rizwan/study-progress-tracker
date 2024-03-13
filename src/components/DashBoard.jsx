// import React from 'react'
// import { Navbar } from './Navbar'

// const DashBoard = ({sidebarToggle,setSidebarToggle}) => {
//   return (
//     <div className={`${sidebarToggle ? "":"ml-64"}  w-full transform transition-all duration-300`}>
//         <Navbar
//         sidebarToggle={sidebarToggle}
//         setSidebarToggle={setSidebarToggle}/>
//     </div>
//   )
// }
import React from 'react';
import { Navbar } from './Navbar';
import SideBar from './SideBar';

const DashBoard = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <div className="relative w-full">
      <SideBar sidebarToggle={sidebarToggle} />
      <div className={`lg:ml-64 transition-all duration-300 ${sidebarToggle ? "": "ml-0"}  w-full`}>
        <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
      </div>
    </div>
  );
};

export default DashBoard;









