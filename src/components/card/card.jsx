import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ img1, like, box, star, star2 }) => {
  return (
    <div className="w-[30%] ">
      <div className="relative ">
        <img src={img1} alt="img" className=" " />
        <div className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center absolute right-2 top-2">
          <img src={like} alt="" />
        </div>
        <div className="flex gap-1 px-2 py-1 bg-white rounded-full items-center absolute right-2 bottom-2">
          <Link className="text-[12px]">Add to Cart</Link>
          <img src={box} alt="box" className="w-5" />
        </div>
      </div>
      <div className="bg-white px-4 py-3 rounded-b-[15px]">
        <div className="flex justify-between mb-1 ">
          <p>Macaron box (12 pieces)</p>
          <p>$5</p>
        </div>
        <div className="flex gap-[2px]">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>
      </div>
    </div>
  );
};
