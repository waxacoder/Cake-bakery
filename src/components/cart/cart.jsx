import React from "react";
import { Link } from "react-router-dom";

export const Cart = ({ img1, like, box, star, star2 }) => {
  return (
    <div className="w-[30%] ">
      <div className="relative ">
        <img src={img1} alt="img" className=" " />
        <div className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center absolute right-2 top-2">
          <img src={like} alt="" />
        </div>
        <div className="flex gap-1 px-2 py-1 bg-white rounded-full items-center absolute right-2 bottom-2">
          <img src={box} alt="" />
          <Link>Add to Cart</Link>
        </div>
      </div>
      <div className="bg-white px-4 py-3 rounded-b-[30px]">
        <div className="flex justify-between ">
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
