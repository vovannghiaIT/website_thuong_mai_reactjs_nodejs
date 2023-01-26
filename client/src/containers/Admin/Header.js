import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import icons from "../../ultils/icons";
import { path } from "../../ultils/constant";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    isLoggedIn && fetchCurrent();
  }, [isLoggedIn]);

  const fetchCurrent = async () => {
    dispatch(actions.getCurrent());
  };

  const [menuCategories, setMenuCategories] = useState(false);

  const handleSubmitMenu = () => {
    menuCategories ? setMenuCategories(false) : setMenuCategories(true);
  };

  const { FiList, BsList, RiArrowDropDownLine, MdNavigateNext, BiCircle } =
    icons;
  const { currentData } = useSelector((state) => state.user);

  return (
    <div>
      <div className="fixed z-10  shadow-md w-full  shadow-gray-500 ">
        <div className="flex  justify-between">
          <div className="flex   flex-col justify-center py-2 px-4">
            <Link to={path.ADMIN} className="  ">
              Admin {currentData?.firstName + currentData?.lastName}
            </Link>
            <span
              className="hover:text-yellow-300 cursor-pointer"
              onClick={() => {
                dispatch(actions.logout());
                navigate("/");
              }}
            >
              Đăng xuất
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3  ">
        <div className="mt-16  flex flex-col ">
          <div className="bg-[#1d2531]  px-4 py-2">
            <button
              className="text-[16px] text-start flex  items-center `"
              onClick={() => handleSubmitMenu()}
            >
              <span className="ml-2">
                <BsList size={20} />
              </span>
              <span className="px-2 mr-6  bg-[#1d2531]">Quản lý sản phẩm</span>
              {menuCategories ? (
                <span className="">
                  <RiArrowDropDownLine size={20} color="white" />
                </span>
              ) : (
                <span className="  ">
                  <MdNavigateNext size={16} color="white" />
                </span>
              )}
            </button>
          </div>
          {menuCategories && (
            <div className=" bg-[#1d2531]">
              <Link
                to="/admin/category"
                className="text-start flex  items-center  ml-4"
              >
                <span className="p-2">
                  <MdNavigateNext size={14} color="white" />
                </span>
                <span className="capitalize"> loại sản phẩm</span>
              </Link>
              <Link
                to="/admin/product"
                className="text-start flex  items-center  ml-4 "
              >
                <span className="p-2">
                  <MdNavigateNext size={14} color="white" />
                </span>
                <span className="capitalize"> sản phẩm</span>
              </Link>
            </div>
          )}
          <Link
            to="/admin/brand"
            className="text-start flex  mt-2 items-center ml-4 "
          >
            <span className="p-2">
              <BiCircle size={20} color="red" />
            </span>
            <span className="capitalize">Thương hiệu</span>
          </Link>
          <Link
            to="/admin/opera"
            className="text-start flex  mt-2 items-center ml-4 "
          >
            <span className="p-2">
              <BiCircle size={20} color="red" />
            </span>
            <span className="capitalize">Hệ điều hành</span>
          </Link>
          <Link
            to="/admin/user"
            className="text-start flex  mt-2 items-center ml-4 "
          >
            <span className="p-2">
              <BiCircle size={20} color="yellow" />
            </span>
            <span className="capitalize">Quản lý người dùng</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
