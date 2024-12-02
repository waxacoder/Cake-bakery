import account from "../../assets/icons/Account.svg";
import phone from "../../assets/icons/Telephone.svg";
import mail from "../../assets/icons/mail.svg";
import lock from "../../assets/icons/eye.svg";
import address from "../../assets/icons/Autolocate.png";
import home from "../../assets/icons/Home.svg";
import apartment from "../../assets/icons/Building.svg";
import plus from "../../assets/icons/plus.svg";
import { SmallMenu } from "../../components";
import { Link } from "react-router-dom";
import { useState } from "react";
export const Signup = () => {
  const [password, setPassword] = useState("");
  const [isShowed, setIsShowed] = useState(true);
  const show = () => {
    setIsShowed(!isShowed);
  };
  return (
    <>
      <SmallMenu />
      <div className="manrope flex items-center justify-center  ">
        <div className="bg-white2 h-[560px]   px-10 py-12 flex flex-col items-center rounded-[30px] mt-3">
          <h2 className="text-[25px] font-bold text-black mb-5">
            Create a new account
          </h2>
          <div className="flex gap-7">
            <div>
              <div className="flex  border-[1px]   border-brown w-[340px]  rounded-[10px]  mt-3 p-3  mb-4 gap-2">
                <input
                  type="text"
                  placeholder="First name"
                  className="outline-none w-[100%] bg-white2"
                />
                <img className="w-6" src={account} alt="account" />
              </div>

              <div className="flex  border-[1px]   border-brown w-[340px]  rounded-[10px]  mt-3 p-3  mb-4 gap-2">
                <input
                  type="mail"
                  placeholder="Email"
                  className="outline-none w-[100%] bg-white2"
                />
                <img src={mail} alt="mail" />
              </div>

              <div className="flex  border-[1px]   border-brown w-[340px]  rounded-[10px]  mt-3 p-3  mb-4 gap-2">
                <input
                  type="phone"
                  placeholder="Phone Number"
                  className="outline-none w-[100%] bg-white2"
                />
                <img src={phone} alt="phone" />
              </div>

              <div className="flex  border-[1px]   border-brown w-[340px] bg-white2 rounded-[10px]  mt-3 p-3  mb-4 gap-2">
                <input
                  value={password}
                  type={isShowed ? "password" : "text"}
                  placeholder="Password"
                  className="outline-none w-[100%]  bg-white2"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img src={lock} alt="lock" onClick={show} />
              </div>
            </div>

            <div>
              <div className="flex  border-[1px]   border-brown w-[340px] bg-white2 rounded-[10px]  mt-3 py-1 px-1 pl-3 gap-2">
                <input
                  type="address"
                  placeholder="Address"
                  className="outline-none w-[100%] bg-white2"
                />
                <img className="w-[100px]" src={address} alt="address" />
              </div>

              <div className="flex justify-between mt-3">
                <div className="flex items-center gap-2 bg-white border-[1px] border-brown rounded-[10px]  py-3 px-10 text-brown cursor-pointer">
                  <img src={home} alt="" />
                  <p>Home</p>
                </div>
                <div className="flex items-center gap-2 bg-white border-[1px] border-brown rounded-[10px]  py-3 px-6 text-brown cursor-pointer">
                  <img src={apartment} alt="apartment" />
                  <p>Apartment</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-10 border-[1px] border-brown rounded-full px-2 py-1 w-[65%] mx-auto">
                <input
                  type="checkbox"
                  className="accent-brown w-4 h-4 rounded-[5px] border-[1px] outline-none border-brown bg-white2 
             checked:bg-brown checked:border-brown transition duration-200 cursor-pointer"></input>
                <p>Different billing address</p>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <Link className="bg-orange flex items-center gap-3 py-[7px] px-[50px] rounded-full text-[18px] font-semibold">
              <p> Create account</p>
              <img src={plus} alt="plus" className="w-6" />
            </Link>
            <Link to="/login" className="text-[13px] flex justify-center mt-4">
              Already have an account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
