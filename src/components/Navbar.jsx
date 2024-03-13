import React from 'react'
import { FaBars, FaBell, FaUserCircle } from 'react-icons/fa'

export const Navbar = ({sidebarToggle,setSidebarToggle}) => {
  return (
    <nav className='bg-gray-800 px-4 py-3 flex justify-between'>
        <div className='flex items-center text-xl'>
            <FaBars className='text-white me-4 cursor-pointer' onClick={()=>setSidebarToggle(!sidebarToggle)} />
            <span className='text-white font-semibold'>Study Progerss Tracker</span>
        </div>
        <div className='flex items-center gap-x-5'>
            <div className='text-white'>
                <FaBell className='w-6 h-6'/>
            </div>
            <div className='relative'>
                <button className='text-white group'>
                    <FaUserCircle className='w-6 h-6 mt-1'/>
                    <div className='z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0'>
                        <ul className='py-2 text-sm text-gray-950'>
                        <li><a href="">Profile</a></li>
                        <li><a href="'">Setting</a></li>
                        <li><a href="">Log Out</a></li>
                        </ul>
                    </div>
                </button>
            </div>
        </div>
    </nav>
  )
}
