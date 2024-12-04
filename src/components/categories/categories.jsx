import React from "react";
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
export const Categories = () => {
  return (
    <div className="flex gap-4 items-center mt-[30px] justify-center">
      <Link className="flex gap-1 text-[13px] items-center">
        <img src={fire} alt="fire" />
        <p>Most popular</p>
      </Link>

      <Link className="flex gap-1 text-[13px] items-center">
        <img src={like} alt="like" />
        <p>Favorites</p>
      </Link>

      <Link className="flex gap-1 text-[13px] items-center">
        <img src={bread} alt="bread" />
        <p>Bread</p>
      </Link>

      <Link className="flex gap-1 text-[13px] items-center">
        <img src={cookie} alt="cookie" />
        <p>Cookie</p>
      </Link>

      <Link className="flex gap-1 text-[13px] items-center">
        <img src={croissant} alt="croissant" />
        <p>Croissant</p>
      </Link>

      <Link className="flex gap-1 text-[13px] items-center">
        <img src={cupcake} alt="cupcake" />
        <p>Cupcake</p>
      </Link>

      <Link className="flex gap-1 text-[13px] items-center">
        <img src={pie} alt="pie" />
        <p>Custard pie</p>
      </Link>

      <Link className="flex gap-1 text-[13px] items-center">
        <img src={donut} alt="donut" />
        <p>Donut</p>
      </Link>

      <Link className="flex gap-1 text-[13px] items-center">
        <img src={coffee} alt="coffee" />
        <p>Coffee</p>
      </Link>

      <Link className="flex gap-1 text-[13px] items-center">
        <img src={cake} alt="cake" />
        <p>Cake</p>
      </Link>
    </div>
  );
};
