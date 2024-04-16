import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import DashBoard from "../components/DashBoard";
import { isLoggedIn } from "../auth";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data) {
      setLoggedIn(true);
      console.log(loggedIn);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return <div>{loggedIn && <MainPage />}</div>;
};

const MainPage = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className="flex">
      <SideBar sidebarToggle={sidebarToggle} />
      <DashBoard setSidebarToggle={setSidebarToggle} />
    </div>
  );
};

export default Main;
