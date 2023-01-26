import React from "react";
import { NavLink } from "react-router-dom";

const FillterItem = ({ text, images, link }) => {
  return (
    <>
      <NavLink
        to={`/${link}`}
        className={({ isActive }) =>
          isActive
            ? "border border-red-500 rounded-xl  "
            : "border border-gray-300 rounded-xl  "
        }
      >
        <div className=" flex gap-2  justify-center items-center  px-4 py-2 cursor-pointer ">
          <span>
            <img
              src={"./img/" + images}
              alt="anh icon filter"
              className="object-cover w-7 h-7"
            />
          </span>
          <span>{text}</span>
        </div>
      </NavLink>
    </>
  );
};

export default FillterItem;
