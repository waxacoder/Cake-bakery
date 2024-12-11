import React, { useState } from "react";
import fire from "../../assets/icons/fire.svg";
import like from "../../assets/icons/like.svg";
import bread from "../../assets/icons/bread.svg";
import cookie from "../../assets/icons/cookie.svg";
import croissant from "../../assets/icons/croissant.svg";
import cupcake from "../../assets/icons/cup cake.svg";
import pie from "../../assets/icons/cake piece.svg";
import donut from "../../assets/icons/donut.svg";
import coffee from "../../assets/icons/coffee box.svg";
import cake from "../../assets/icons/cake.svg";
import { Link } from "react-router-dom";
const categories = [
  "Most popular",
  "Favorites",
  "Bread",
  "Cookie",
  "Croissant",
  "Cupcake",
  "Custard pie",
  "Donut",
  "Coffee",
  "Cake",
];
export const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("");

  return (
    <div className="flex gap-[16px] items-center py-[10px] justify-center ">
      <Link className="flex gap-1 text-[14px] items-center focus:border-b-2 focus:border-brown focus:text-brown py-3">
        <img src={fire} alt="fire" />
        <p>Most popular</p>
      </Link>

      <Link className="flex gap-1 text-[14px] items-center focus:border-b-2 focus:border-brown focus:text-brown py-3">
        <img src={like} alt="like" />
        <p>Favorites</p>
      </Link>

      <Link className="flex gap-1 text-[14px] items-center focus:border-b-2 focus:border-brown focus:text-brown py-3">
        <img src={bread} alt="bread" />
        <p>Bread</p>
      </Link>

      <Link className="flex gap-1 text-[14px] items-center focus:border-b-2 focus:border-brown focus:text-brown py-3">
        <img src={cookie} alt="cookie" />
        <p>Cookie</p>
      </Link>

      <Link className="flex gap-1 text-[14px] items-center focus:border-b-2 focus:border-brown focus:text-brown py-3">
        <img src={croissant} alt="croissant" />
        <p>Croissant</p>
      </Link>

      <Link className="flex gap-1 text-[14px] items-center focus:border-b-2 focus:border-brown focus:text-brown py-3">
        <img src={cupcake} alt="cupcake" />
        <p>Cupcake</p>
      </Link>

      <Link className="flex gap-1 text-[14px] items-center focus:border-b-2 focus:border-brown focus:text-brown py-3">
        <img src={pie} alt="pie" />
        <p>Custard pie</p>
      </Link>

      <Link className="flex gap-1 text-[14px] items-center focus:border-b-2 focus:border-brown focus:text-brown py-4">
        <img src={donut} alt="donut" />
        <p>Donut</p>
      </Link>

      <Link className="flex gap-1 text-[14px] items-center focus:border-b-2 focus:border-brown focus:text-brown py-4">
        <img src={coffee} alt="coffee" />
        <p>Coffee</p>
      </Link>

      <Link className="flex gap-1 text-[14px] items-center focus:border-b-2 focus:border-brown focus:text-brown py-4">
        <img src={cake} alt="cake" />
        <p>Cake</p>
      </Link>
    </div>
  );
};
