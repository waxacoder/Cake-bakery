import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Signup, Welcome } from "./pages";

import { Navbarlayout } from "./layouts";
export const Router = () => {
  return (
    <div className="bg-custom-bg bg-position bg-no-repeat bg-cover bg-center h-screen border-[1px] border-gray-400 ">
     
      
 
      <div>
        <Routes>
          <Route element={<Navbarlayout/>}>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};
