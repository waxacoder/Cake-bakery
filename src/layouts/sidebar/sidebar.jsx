import React, { useState } from "react";
import search from "../../assets/icons/search.svg";
import bin from "../../assets/icons/bin.svg";
import { Button, Checkbox } from "../../components";
export const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="bg-white3 pl-[55px] pt-[40px] pr-[20px] h-[91vh] w-[30%]">
      <div className="pl-5 py-[15px] mb-[40px] shadow-[0px_0px_10px_orange]  rounded-[50px] w-[300px] flex gap-2 ">
        <img src={search} alt="" />
        <input
          type="text"
          placeholder="Search"
          className="outline-none bg-white3 text-[18px] placeholder:text-brown"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 ">
          <div className="flex gap-1">
            <h4 className="font-bold">4</h4>
            <p>Filters applied</p>
          </div>
          <div className="flex gap-1">
            <h4 className="font-bold">26</h4>
            <p>Results</p>
          </div>

          <div className="flex gap-1 bg-grey3 px-[10px] py-[7px]">
            <img src={bin} alt="bin" />
            <p>Reset filter</p>
          </div>
        </div>

        <div>
          <h4 className="text-[20px] text-[#1C140C]">Price</h4>
          <div className="flex gap-2 items-center">
            <Button>$</Button>
            <Button> $$ </Button>
            <Button>$$$</Button>
            <Button>$$$$</Button>
          </div>
        </div>

        <div>
          <h4 className="text-[20px] text-[#1C140C]">Show me:</h4>
          <div className="flex gap-x-4 items-center flex-wrap">
            <Button>All options</Button>
            <Button> Vegetarian</Button>
            <br />
            <Button> Vegan</Button>
            <Button> Gluten free</Button>
            
          </div>
        </div>

        <div>
          <h4 className="text-[20px] text-[#1C140C]">
            Don’t show me goodies with:
          </h4>
          <div className="flex w-[320px] flex-wrap gap-x-2">
            <Checkbox>Almonds</Checkbox>
            <Checkbox>Cashews</Checkbox>
            <Checkbox>Eggs</Checkbox>
            <Checkbox>Hazelnuts</Checkbox>
            <Checkbox>Milk</Checkbox>
            <Checkbox>Nuts</Checkbox>
            <Checkbox>Peanuts</Checkbox>
            <Checkbox>Pecans</Checkbox>
            <Checkbox>Pistachios</Checkbox>
            <Checkbox>Walnuts</Checkbox>
          </div>
        </div>
      </div>
    </div>
  );
};