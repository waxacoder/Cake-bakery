import React from "react";
import { Card, Categories } from "../../../components";
import img1 from "../../../assets/images/img1.png";
import img2 from "../../../assets/images/img2.png";
import img3 from "../../../assets/images/img3.png";

export const Homesection = () => {
  return (
    <div className="bg-white2  w-[74%] ">
      <Categories />
      <div className=" flex flex-wrap gap-5 pl-[10px]  h-full max-h-[calc(100vh-150px)] overflow-auto pb-5 ">
        <Card img1={img1} img2={img2} img3={img3} />
      </div>
    </div>
  );
};
