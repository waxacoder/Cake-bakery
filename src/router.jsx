import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Login, Signup, Welcome } from "./pages";

import { Navbarlayout } from "./layouts";
export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};
