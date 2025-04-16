import React from "react";
import {} from "./MainLayoutStyle.jsx";
import HeaderLayout from "../header/HeaderLayout.jsx";
import SideLayout from "../side/SideLayout.jsx";

const MainLayout = () => {
  return (
    <div>
      <HeaderLayout />
      <SideLayout />
    </div>
  );
};

export default MainLayout;
