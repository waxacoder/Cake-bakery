import phone from "../../assets/icons/Telephone.svg";
import lock from "../../assets/icons/eye.svg";
import right from "../../assets/icons/right arrow.svg";
import { Link } from "react-router-dom";
import { SmallMenu } from "../../components";
import { useState } from "react";

export const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isShowed, setIsShowed] = useState(true);
  const show = () => {
    setIsShowed(!isShowed);
  };

  const isTrue = (e) => {
    if (password === "" || phoneNumber === "") {
      alert("Fill in fields");
      e.preventDefault();
    }
  };
  return (
    <div  className="bg-custom-bg bg-position bg-no-repeat bg-cover bg-center h-screen border-[1px] border-gray-400 ">
      <SmallMenu />
      <div className="manrope flex items-center justify-center  ">
        <div className="bg-white2 h-[560px]  w-[390px] px-5 py-12 flex flex-col items-center rounded-[30px] mt-3">
          <h2 className="text-[19px] font-bold text-slate-700 mb-10">
            Login into your account
          </h2>
          <div className="flex  border-[1px]  border-brown w-[90%] rounded-[10px]  mt-3 p-3  mb-4 gap-2">
            <input
              value={phoneNumber}
              type="phone"
              placeholder="Phone Number"
              className="outline-none w-[100%] bg-white2"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <img src={phone} alt="phone" />
          </div>
          <div className="flex  border-[1px]  border-brown w-[90%] rounded-[10px]  mt-3 py-3 px-2  mb-4 gap-2">
            <input
              value={password}
              type={isShowed ? "password" : "text"}
              placeholder="Password"
              className="outline-none w-[100%] bg-white2"
              onChange={(e) => setPassword(e.target.value)}
            />
            <img src={lock} alt="lock" onClick={show} />
          </div>
          <Link className="text-slate-400 mt-2 ">Reset my password</Link>
          <Link
            to="/home"
            className="mt-[140px] flex justify-center gap-[15px] bg-orange w-[70%] rounded-[40px] p-3"
            onClick={(e) => isTrue(e)}>
            <button className="font-bold">Login</button>
            <img src={right} alt="arrow" />
          </Link>
          <Link to="/signup" className="mt-[15px] text-2 text-[14px]">
            Create a new account
          </Link>
        </div>
      </div>
    </div>
  );
};
