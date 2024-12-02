import React from "react";
import logo from "../../assets/icons/Logo Box.svg";
import notification from "../../assets/icons/Bell.svg";
import box from "../../assets/icons/Box.svg";
import account from "../../assets/icons/Account.svg";
export const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-[40px] py-4 bg-white">
      <img src={logo} alt="logo" />
      <ul className="flex items-center gap-[45px] text-brown">
        <li className="flex items-center gap-2">
          <img className="w-6" src={notification} alt="" />
          <p>Notification</p>
        </li>
        <li className="flex items-center gap-2">
          <img className="w-6" src={box} alt="" />
          <p>Go to Cart</p>
        </li>
        <li className="flex items-center gap-2">
          <img className="w-6" src={account} alt="" />
          <p>Account</p>
        </li>
      </ul>
    </div>
  );
};
