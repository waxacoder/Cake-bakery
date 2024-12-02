import React from "react";
import { Navbar } from "../../components";
import { Outlet } from "react-router-dom";

export const Navbarlayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
