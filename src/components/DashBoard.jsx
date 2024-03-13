// import React from 'react'
// import { Navbar } from './Navbar'

// const DashBoard = ({sidebarToggle,setSidebarToggle}) => {
//   return (
//     <div className={`${sidebarToggle ? "":"ml-64"}  w-full`}>
//         <Navbar
//         sidebarToggle={sidebarToggle}
//         setSidebarToggle={setSidebarToggle}/>
//     </div>
//   )
// }
// export default DashBoard;
// DashBoard Component
// DashBoard Component
import React from 'react';
import { Navbar } from './Navbar';

const DashBoard = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    // <div className={`${sidebarToggle ? "" : "ml-64"} w-full`}>
    <div className='lg:ml-64 ml-0  w-full'>
      <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
    </div>
  );
};

export default DashBoard;











