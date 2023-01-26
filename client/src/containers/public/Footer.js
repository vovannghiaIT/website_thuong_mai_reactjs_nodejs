import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const { categories } = useSelector((state) => state.category);
  return (
    <div className="bg-white w-full mt-5 gap-5 border-t border-red-500">
      <div className="w-[80%] flex flex-wrap mx-auto">
        {categories?.length > 0 &&
          categories
            .filter((item) => item.status === 1)
            .map((items, index) => {
              return (
                <p key={index} className="w-[13.33%] cursor-pointer">
                  {items.name}
                </p>
              );
            })}
      </div>
    </div>
  );
};

export default Footer;
