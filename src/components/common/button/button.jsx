import React from "react";
import { useState } from "react";


export const Button = ({ children,isActive,onClick }) => {
  
  return (
    <button
      onClick={onClick}
      className={`${
        isActive ? "bg-brown2 text-white border-brown2" : "bg-white3 text-brown"
      } font-semibold px-5 p-1 border-[1px] border-brown rounded-[20px] my-2`}>
      {children}
    </button>
  );
};
