import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomeAdmin from "./HomeAdmin";

import { path } from "../../ultils/constant";
import { HomeProduct, TrashProduct } from "./product";
import { HomeCategory, TrashCategory } from "./category";
import { HomeBrand, TrashBrand } from "./brand";
import { HomeOpera, TrashOpera } from "./opera";
import { HomeUser, TrashUser } from "./user";

const Admin = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<HomeAdmin />} />
          <Route path={path.CATEGORY} element={<HomeCategory />} />
          <Route path={path.PRODUCT} element={<HomeProduct />} />
          <Route path={path.Brand} element={<HomeBrand />} />
          <Route path={path.Opera} element={<HomeOpera />} />
          <Route path={path.User} element={<HomeUser />} />
          <Route path={path.TRASHCATEGORY} element={<TrashCategory />} />
          <Route path={path.TRASHPRODUCT} element={<TrashProduct />} />
          <Route path={path.TRANSHBRAND} element={<TrashBrand />} />
          <Route path={path.TRANSHOPERA} element={<TrashOpera />} />
          <Route path={path.TRANSHUSER} element={<TrashUser />} />
        </Route>
      </Routes>
    </>
  );
};

export default Admin;
