import {
  Home,
  Login,
  HomePage,
  InfoCustomer,
  Address,
  ReSetPassword,
  ProductDetail,
  Cart,
} from "./containers/public";
import { Routes, Route } from "react-router-dom";
import { path } from "./ultils/constant";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Admin } from "./containers/Admin";

import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="w-full font-sans">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path="*" element={<HomePage />} />
          <Route path={path.INFO} element={<InfoCustomer />} />
          <Route path={path.ADDRESS} element={<Address />} />
          <Route path={path.RESETPASSWORD} element={<ReSetPassword />} />
          <Route path={path.PRODUCTDETAIL} element={<ProductDetail />} />
          <Route path={path.CART} element={<Cart />} />
        </Route>
        <Route path={path.LOGIN} element={<Login />} />
        <Route path={path.ADMIN} element={<Admin />} />
      </Routes>
    </div>
  );
}


export default App;

