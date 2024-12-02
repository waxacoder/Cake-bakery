import left from "../../assets/icons/left arrow.svg";
import cupcakes from "../../assets/images/cupcakes.png";
import donut from "../../assets/images/donut.png";
import icedcoffee from "../../assets/images/icedcoffee.png";
import peachcake from "../../assets/images/peachcake.png";
export const SmallMenu = () => {
  return (
    <div>
      <div className="flex items-center gap-5 mx-[30px] my-[30px]">
        <div className="w-8 h-8  rounded-full bg-white flex justify-center items-center">
        <img className="w-4" src={left} alt="arrow" />
        </div>
        <div className="flex gap-2">
          <img className="w-[60px]" src={donut} alt="donut" />
          <img className="w-[60px]" src={cupcakes} alt="cupcakes" />
          <img className="w-[60px]" src={icedcoffee} alt="icedcoffee" />
          <img className="w-[60px]" src={peachcake} alt="peachcake" />
        </div>
      </div>
    </div>
  );
};
