import React, { useCallback, useEffect, useState } from "react";
import logo from "../../assets/img/logo.png";
import icons from "../../ultils/icons";
import { useNavigate, Link, createSearchParams } from "react-router-dom";
import { path } from "../../ultils/constant";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import { User } from "../../components";
import { Cookies, useCookies } from "react-cookie";

const { FiSearch, HiOutlineUserCircle, FaShoppingCart } = icons;
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, { state: { flag } });
  }, []);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const { categories } = useSelector((state) => state.category);
  const [cookies, setCookie] = useCookies(["Cart"]);

  const [valueSearch, setValueSearch] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  const { currentData } = useSelector((state) => state.user);
  const fetchData = async () => {
    dispatch(actions.getCategories());
  };
  //Panginate
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const endOffset = itemOffset + itemsPerPage;
  const currentItemsCategories = categories
    .filter((item) => item.status === 1)
    .slice(itemOffset, endOffset);

  // console.log(currentItemsCategories);
  const submitSearch = () => {
    navigate({
      pathname: "search",
      search: createSearchParams({
        key: valueSearch,
      }).toString(),
    });
  };
  const submitSearchKey = (e) => {
    if (e.key === "Enter") {
      navigate({
        pathname: "search",
        search: createSearchParams({
          key: valueSearch,
        }).toString(),
      });
    }
  };

  const submitSearchValue = (e) => {
    setValueSearch(e.target.value);
  };
  const indexs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <div className="w-full bg-[#d70018] ">
      <div className="w-4/5 text-white mx-auto md:max-lg:w-full md:max-lg:px-2  sm:max-lg:mx-0 sm:max-lg:w-full sm:max-lg:px-4">
        <div className="flex pt-2 sm:max-md:flex-col justify-between items-center gap-2">
          <Link to={"/"}>
            <img src={logo} alt="anh" className="w-[170px] sm:max-md:w-full" />
          </Link>
          <div className="text-[13px] hover:text-yellow-300 cursor-pointer w-[113px] sm:max-md:hidden">
            Hệ thống của hàng
          </div>
          <div className="flex  sm:max-md:w-full">
            <label
              // onSubmit={handleSearch}
              htmlFor="search"
              className="flex  sm:max-md:w-full"
            >
              <input
                type="text"
                id="search"
                value={valueSearch || ""}
                onChange={(e) => submitSearchValue(e)}
                placeholder="Tìm kiếm"
                onKeyDown={(e) => submitSearchKey(e)}
                className="py-2 px-2 text-sm border border-blue-lighter rounded-l outline-none text-black sm:max-md:w-full"
              />
              <button
                onClick={() => submitSearch()}
                className="w-10 flex items-center justify-center bg-white text-black border-t border-r border-b border-blue-lighter rounded-r text-blue-dark"
              >
                <FiSearch />
              </button>
            </label>
          </div>
          <div className="w-[150px] flex  items-center sm:max-md:hidden ">
            <span className="text-[13px] w-[100px] text-center pr-1 border-r-2 border-red-300 hover:text-yellow-300 cursor-pointer">
              24h
              <br /> Công nghệ
            </span>
            <span className="text-[13px] w-[50px] px-2 hover:text-yellow-300 cursor-pointer">
              News
            </span>
          </div>

          <div className="pr-1 flex  items-center text-[13px] w-[150px] md:max-lg:w-[220px] sm:max-md:hidden">
            {!isLoggedIn && (
              <span className="px-1 md:max-lg:hidden">
                <HiOutlineUserCircle size={30} />
              </span>
            )}
            {!isLoggedIn && (
              <span>
                <span
                  className="hover:text-yellow-300 cursor-pointer"
                  onClick={() => goLogin(false)}
                >
                  Đăng nhập
                </span>
                <br />
                <span
                  className="hover:text-yellow-300 cursor-pointer"
                  onClick={() => goLogin(true)}
                >
                  Đăng Ký
                </span>
              </span>
            )}
            {isLoggedIn && (
              <span>
                {currentData?.roles === 1 && (
                  <Link to={path.ADMIN}>
                    <span className="hover:text-yellow-300 cursor-pointer">
                      Admin
                    </span>
                  </Link>
                )}
                <br />
                <span
                  className="hover:text-yellow-300 cursor-pointer"
                  onClick={() => {
                    dispatch(actions.logout());
                  }}
                >
                  Đăng xuất
                </span>
                <br />
                <User />
              </span>
            )}
          </div>
          <div className="bg-red-500 px-2 py-2 rounded-md flex items-center sm:max-md:hidden relative">
            <FaShoppingCart size={20} />
            <Link
              to={path.CART}
              className="px-2 text-[14px] hover:text-yellow-300 cursor-pointer md:max-lg:hidden"
            >
              Giỏ hàng
            </Link>

            <span className="absolute top-[-20%] right-[-10%] text-white w-[25px] h-[25px] text-center bg-red-700 rounded-full">
              {cookies?.Cart?.length > 0 ? cookies?.Cart?.length : 0}
            </span>
          </div>
        </div>
        <div className="flex gap-10 py-1 cursor-pointer text-white">
          {currentItemsCategories?.length > 0 &&
            currentItemsCategories.map((items, index) => {
              return (
                <Link
                  to={"/category-product/" + items.slug}
                  key={index}
                  className="capitalize hover:text-yellow-300 "
                >
                  {items.name}
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Header;
