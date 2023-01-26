import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
  return (
    <div className="w-full ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
