import React from "react";
import icons from "../../ultils/icons";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Address = () => {
  const { currentData } = useSelector((state) => state.user);
  const {
    AiFillHome,
    AiOutlineHome,
    AiOutlineUser,
    GoLocation,
    FaExchangeAlt,
    SlLogout,
  } = icons;
  return (
    <div className="bg-[#f1f1f1] w-full">
      <div className="py-1 shadow-lg ">
        <div className="w-[80%] mx-auto text-[13px] flex items-center gap-1">
          <AiOutlineHome color="red" />
          Trang chủ / Tài khoản
        </div>
      </div>
      <div className="w-[80%] mx-auto items-center mt-5 bg-[#f1f1f1]">
        <div className="flex justify-between  gap-5">
          <div className="flex flex-col gap-5 w-[70%] items-start">
            <div className="flex gap-5 justify-center items-center w-full">
              <div className="w-1/2 p-5 bg-white  flex flex-col gap-2 justify-center items-center relative shadow-10% rounded-xl">
                <img
                  src="./img/checklist.png"
                  alt="checklist"
                  className="object-cover w-7 h-7 "
                />
                <span className="font-semibold text-[14px]">
                  Lịch sử đơn hàng
                </span>
                <span className="absolute top-[40%] right-[45%] text-center bg-red-600 rounded-xl w-[20px] h-[20px] leading-[20px] text-white text-[9px] ">
                  0
                </span>
              </div>
              <div className="w-1/2 p-5 bg-white  flex flex-col gap-2 justify-center items-center relative shadow-10% rounded-xl">
                <img
                  src="./img/anon-avatar.png"
                  alt="checklist"
                  className="object-cover w-7 h-7 "
                />
                <span className="font-semibold text-[14px]">
                  {" "}
                  Xin chào {currentData?.firstName + currentData?.lastName}
                </span>
              </div>
            </div>
            <div className="w-full p-5 mb-5 bg-white  flex flex-col justify-start items-start relative shadow-10% rounded-xl">
              <button className="text-white bg-red-600 rounded-md px-2 py-1">
                Thêm địa chỉ
              </button>
            </div>
          </div>
          <div className="w-[30%]">
            <ul className="w-full p-5 mb-5 bg-white  flex flex-col gap-4 justify-start items-start relative shadow-10% rounded-xl">
              <li className="list-none flex gap-4 cursor-pointer border-b-[1.2px] w-full  py-2 justify-start items-center">
                <AiOutlineUser />
                <NavLink
                  to={"/tai-khoan"}
                  className={({ isActive }) =>
                    isActive
                      ? " text-red-600  font-semibold hover:text-red-600"
                      : " hover:text-red-600  "
                  }
                >
                  Thông tin tài khoản
                </NavLink>
              </li>
              <li className="list-none flex gap-4 cursor-pointer border-b-[1.2px] w-full  py-2 justify-start items-center">
                <GoLocation />
                <NavLink
                  to={"/dia-chi"}
                  className={({ isActive }) =>
                    isActive
                      ? " text-red-600  font-semibold hover:text-red-600"
                      : "  hover:text-red-600 "
                  }
                >
                  Quản lý địa chỉ
                </NavLink>
              </li>
              <li className="list-none flex gap-4 cursor-pointer border-b-[1.2px] w-full  py-2 justify-start items-center">
                <FaExchangeAlt />
                <NavLink
                  to={"/mat-khau"}
                  className={({ isActive }) =>
                    isActive
                      ? " text-red-600  font-semibold hover:text-red-600"
                      : "  hover:text-red-600 "
                  }
                >
                  Đổi mật khẩu
                </NavLink>
              </li>
              <li className="list-none flex gap-4 cursor-pointer  w-full  py-2 justify-start items-center">
                <SlLogout />
                <button className="hover:text-red-600">Đăng xuất</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
