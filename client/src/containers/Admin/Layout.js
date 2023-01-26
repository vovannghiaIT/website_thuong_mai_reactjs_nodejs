import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <div className="w-full flex flex-wrap block">
        <div className="bg-[#263544] w-[20%] text-white overflow-auto h-screen">
          <Header />
        </div>
        <div className="w-[80%] bg-gray-300 overflow-auto h-screen ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
