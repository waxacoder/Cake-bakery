import React from "react";
import { Card, Categories } from "../../../components";
import img1 from "../../../assets/images/img1.png";
import img2 from "../../../assets/images/img2.png";
import img3 from "../../../assets/images/img3.png";
import like from "../../../assets/icons/like.svg";
import box from "../../../assets/icons/box.svg";
import star from "../../../assets/icons/star.svg";
import star2 from "../../../assets/icons/star2.svg";
import { Link } from "react-router-dom";
export const Homesection = () => {
  return (
    <div className="bg-white2  w-[70%]">
      <Categories />
      <div className="mt-6 flex flex-wrap gap-5 pl-[40px]  h-full max-h-[calc(100vh-150px)] overflow-auto pb-5">
        <Card img1={img1} like={like} box={box} star={star} star2={star2} />
        <Card img1={img2} like={like} box={box} star={star} star2={star2} />
        <Card img1={img3} like={like} box={box} star={star} star2={star2} />
        <Card img1={img1} like={like} box={box} star={star} star2={star2} />
        <Card img1={img2} like={like} box={box} star={star} star2={star2} />
        <Card img1={img3} like={like} box={box} star={star} star2={star2} />
        <Card img1={img1} like={like} box={box} star={star} star2={star2} />
        <Card img1={img2} like={like} box={box} star={star} star2={star2} />
        <Card img1={img3} like={like} box={box} star={star} star2={star2} />
        <Card img1={img1} like={like} box={box} star={star} star2={star2} />
        <Card img1={img2} like={like} box={box} star={star} star2={star2} />
        <Card img1={img3} like={like} box={box} star={star} star2={star2} />
        <Card img1={img1} like={like} box={box} star={star} star2={star2} />
        <Card img1={img2} like={like} box={box} star={star} star2={star2} />
        <Card img1={img3} like={like} box={box} star={star} star2={star2} />
      </div>
    </div>
  );
};
