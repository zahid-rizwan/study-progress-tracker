import React from "react";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { doLogout, getCurrentUser, isLoggedIn } from "../auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
  const [login, setLogin] = useState(false);
  let navigate=useNavigate();
  const logout = () => {
    console.log("logout")
    doLogout(() => {
      setLogin(false);
      navigate("/");
    });
  };
  
  return (
    <nav className=" bg-gray-800 px-4 py-3 flex justify-between">
      <div className="flex items-center text-xl">
        <span className="text-white font-semibold">Study Progerss Tracker</span>
      </div>
      <div className="relative flex items-center gap-x-5">
        <button className="text-white group">
          <FaUserCircle className="w-6 h-6 mt-1" />
          <div className="z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0">
            <ul className="py-2 text-sm text-gray-950">
              <li>
                <a href="">Profile</a>
              </li>
              <li>
                <a href="">Setting</a>
              </li>
              <li>
                <p onClick={logout}>Log Out</p>
              </li>
            </ul>
          </div>
        </button>
        <div className="-mt-5  mr-3">
          <button
            className={"lg:hidden w-6 h-6 fixed text-white"}
            onClick={() => setSidebarToggle(!sidebarToggle)}
          >
            {" "}
            <FaBars
              className="text-white me-4 cursor-pointer"
              onClick={() => setSidebarToggle(!sidebarToggle)}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};
