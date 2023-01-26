import React from "react";
import ItemsProduct from "./ItemsProduct";

const ItemsContext = ({ text, left, right }) => {
  return (
    <div className="bg-white rounded-md p-4">
      <div className="flex justify-between">
        <h1 className="font-medium uppercase">{text}</h1>
        <button className="text-[12px] border bg-slate-200 hover:border-red-500 hover:text-red-500 px-2 py-1 rounded-lg">
          Xem tất cả
        </button>
      </div>
      <div className="flex mt-2 gap-4 justify-start ">
        {left && (
          <div className="flex flex-col gap-5 w-[25%] mt-5 ">
            <div className="relative cursor-pointer img__hover overflow-hidden ">
              <div className="bg-[#f2f2f2] w-[240px] rounded-lg h-[250px]  absolute  bg__hover"></div>
              <img
                src="./img/dt1_l.png"
                alt="anh "
                className="w-[250px] h-[250px] rounded-lg  cursor-pointer "
              />
            </div>
            <div className="relative  cursor-pointer img__hover overflow-hidden ">
              <div className="bg-[#f2f2f2] w-[240px] rounded-lg h-[250px]  absolute  bg__hover"></div>
              <img
                src="./img/dt2_l.png"
                alt="anh "
                className="w-[250px] h-[250px] rounded-lg "
              />
            </div>
          </div>
        )}

        {left && (
          <div className="flex flex-wrap gap-2 w-[75%] ">
            <ItemsProduct contextleft />
          </div>
        )}
        {right && (
          <div className="flex flex-wrap gap-2 w-[75%] ">
            <ItemsProduct contextright />
          </div>
        )}

        {right && (
          <div className="flex flex-col gap-5 w-[25%] mt-5 ">
            <div className="relative cursor-pointer img__hover overflow-hidden ">
              <div className="bg-[#f2f2f2] w-[240px] rounded-lg h-[250px]  absolute  bg__hover"></div>
              <img
                src="./img/mt_r.png"
                alt="anh "
                className="w-[250px] h-[250px] rounded-lg  cursor-pointer "
              />
            </div>
            <div className="relative  cursor-pointer img__hover overflow-hidden ">
              <div className="bg-[#f2f2f2] w-[240px] rounded-lg h-[250px]  absolute  bg__hover"></div>
              <img
                src="./img/mt2_r.png"
                alt="anh "
                className="w-[250px] h-[250px] rounded-lg "
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemsContext;
