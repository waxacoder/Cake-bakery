import { Link } from "react-router-dom";
import { SmallMenu } from "../../components";
import facebook from "../../assets/icons/facebook.svg";
import google from "../../assets/icons/google.svg";
import right from "../../assets/icons/right arrow.svg";

export const Welcome = () => {
  return (
    <>
      <SmallMenu />
      <div className="manrope flex items-center justify-center  text-[#1C140C]">
        <div className="bg-white2 h-[560px]  w-[390px] px-5 py-12 flex flex-col items-center rounded-[30px] mt-3">
          <h2 className="text-[19px] text-center font-semibold mb-20">
            To continue to checkout, log in or create a new account
          </h2>
          <div className="flex flex-col gap-5 items-center">
            <Link
              className="bg-orange py-3 text-center px-16 rounded-full text-[15px] font-bold"
              to="/login">
              Login into your account
            </Link>
            <Link
              className="bg-orange2 py-3 text-center w-[100%] rounded-full text-[15px] font-bold"
              to="/signup">
              Create account
            </Link>
          </div>
          <div className="flex items-center gap-2 my-7">
            <div className="w-[70px] bg-grey h-[1px]"></div>
            <div className="text-grey ">OR</div>
            <div className="w-[70px] bg-grey h-[1px]"></div>
          </div>

          <div className="flex flex-col gap-[15px]">
            <Link className="flex items-center  gap-3 py-[7px] px-[20px] bg-grey2 rounded-full">
              <img className="w-5" src={facebook} alt="facebook" />
              <p className="text-2">Continue with Facebook</p>
            </Link>
            <Link className="flex items-center  gap-3 py-[7px] px-[20px] bg-grey2 rounded-full">
              <img className="w-5" src={google} alt="google" />
              Continue with Google{" "}
            </Link>
            <Link className="flex items-center  gap-3 py-[7px] px-[20px] bg-grey2 rounded-full">
              <img className="w-5" src={right} alt="arrow" />
              Pay without account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
