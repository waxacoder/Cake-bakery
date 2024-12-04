import React from "react";

export const Checkbox = ({ children }) => {
  return (
    <div className="text-brown  px-5 p-1 border-[1px] border-brown rounded-[20px] my-2 flex items-center gap-2">
      <input
        id={children}
        type="checkbox"
        className="accent-brown w-4 h-4 rounded-[5px] border-[1px] outline-none border-brown bg-white2 
             checked:bg-brown checked:border-brown transition duration-200 cursor-pointer"
      />
      <label htmlFor={children}>{children}</label>
    </div>
  );
};
