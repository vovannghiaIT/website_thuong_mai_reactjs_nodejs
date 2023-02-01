import React from "react";

const ButtonFilter = ({ text, colorRed }) => {
  return (
    <button
      className={`border border-gray-400 ${
        colorRed ? "bg-red-500" : "bg-slate-500"
      }  text-white rounded-lg px-4 py-1 w-full`}
    >
      {text}
    </button>
  );
};

export default ButtonFilter;
