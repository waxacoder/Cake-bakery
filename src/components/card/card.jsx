import React, { useState } from "react";
import { datas } from "../../data/data";
import like from "../../assets/icons/like.svg";
import like2 from "../../assets/icons/like2.svg";
import box from "../../assets/icons/box.svg";
import star from "../../assets/icons/star.svg";
import star2 from "../../assets/icons/star2.svg";
export const Card = ({ img1, img2, img3 }) => {
  const [likedItems, setLikedItems] = useState([]);
  const handleLiked = (id) => {
    setLikedItems((prevLikedItems) =>
      prevLikedItems.includes(id)
        ? prevLikedItems.filter((itemId) => itemId !== id)
        : [...prevLikedItems, id]
    );
  };
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {datas.map((item) => (
        <div key={item.id} className="w-[30%] ">
          <div className="relative">
            <img
              src={item.id % 2 == 0 ? img1 : item.id % 3 == 0 ? img3 : img2}
              alt={item.title}
              className="w-full h-[200px] object-cover rounded-t-[15px]"
            />
            <div
              className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center absolute right-2 top-2 shadow-md "
              onClick={() => handleLiked(item.id)}>
              <img
                src={likedItems.includes(item.id) ? like2 : like}
                alt="Like"
              />
            </div>
            <div className="flex gap-1 px-2 py-1 bg-white rounded-full items-center absolute right-2 bottom-2 shadow-md">
              <button className="text-[12px]">Add to Cart</button>
              <img src={box} alt="Cart" className="w-5" />
            </div>
          </div>
          <div className="bg-white px-4 py-3 rounded-b-[15px] shadow-md h-[90px] flex flex-col justify-evenly">
            <div className="flex justify-between mb-1">
              <p>{item.title}</p>
              <p>${item.price.toFixed(2)}</p>
            </div>
            <div className="flex gap-[2px]">
              {Array.from({ length: Math.floor(item.ratings) }, (_, i) => (
                <img key={i} src={star} alt="Star" className="w-4 h-4" />
              ))}
              {item.ratings % 1 !== 0 && <img src={star2} alt="Half Star" />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
