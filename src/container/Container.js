import React from "react";
import MainMenu from "../MainPage/MainMenu";
import { Outlet, useLocation } from "react-router-dom";

const Container = () => {

  const location = useLocation();
  
  if(location.pathname === "/") {
    return <Outlet />
  } else {
    return (
      <div style={{width: "100vw", height: "100vh", display: "flex"}}>
          <MainMenu />
          <Outlet />
      </div>
    );
  }

};

export default Container;
