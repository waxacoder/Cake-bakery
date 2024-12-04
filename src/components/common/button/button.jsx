import React from "react";
import { useState } from "react";
export const Button = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => setIsActive(!isActive);

  return (
    <button
      onClick={handleClick}
      className={`${
        isActive ? "bg-brown text-white" : "bg-white3 text-brown"
      } font-bold px-5 p-1 border-[1px] border-brown rounded-[20px] my-2`}>
      {children}
    </button>
  );
};
