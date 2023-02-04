import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { NoProduct } from "../../components";

import data from "../../ultils/Common/data.json";
import { numberWithCommas } from "../../ultils/Common/formatVietnameseToString";
import { path } from "../../ultils/constant";
import icons from "../../ultils/icons";

const Payment = () => {
  const { FcPrevious } = icons;
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [dataAddress, setDataAddress] = useState();
  const [dataCity, setDataCity] = useState();
  const [dataDistricts, setDataDistricts] = useState();
  const [IdDistricts, setIdDistricts] = useState();
  const [idWard, setIdWard] = useState();
  const [dataWards, setDataWards] = useState();
  // cart
  const [cookies, setCookie] = useCookies(["Cart"]);
  const [dataCart, setDataCart] = useState();
  useEffect(() => {
    fetchData();
  }, [dataCart]);
  const fetchData = () => {
    setDataCart(cookies?.Cart);
  };
  //end cart
  useEffect(() => {
    fectDataAddress();
  }, []);

  useEffect(() => {
    fectDataDistrict();
  }, [dataCity]);
  useEffect(() => {
    fectDataWard();
  }, [IdDistricts]);

  const fectDataAddress = async () => {
    await setDataAddress(data);
  };

  const fectDataDistrict = async () => {
    let idCity = dataCity;
    let dataDistrict = data?.filter((item) => item?.Id === idCity);
    await setDataDistricts(dataDistrict[0]?.Districts);
  };

  const fectDataWard = async () => {
    if (IdDistricts) {
      let idWard = IdDistricts;
      let dataDistrict = dataDistricts?.filter((item) => item?.Id === idWard);

      await setDataWards(dataDistrict[0]?.Wards);
    }
  };

  const inputEffet = (e) => {
    let input = document.getElementById("input").value;
    if (input === "") {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const setDefaultvalue = (e) => {
    setDataCity(e.target.value);
    if (e.target.value === "DEFAULT") {
      setDataWards();
    }
  };
  let total = 0;
  const totalCart = () => {
    dataCart?.length > 0 &&
      dataCart?.map((item) => {
        return (total += item.price * item.number);
      });
    return numberWithCommas(total);
  };
  // console.log(dataCart);
  const indexs = [0];
  return (
    <div className="w-full">
      <div className="w-[90%] mx-auto flex gap-2 ">
        <div className="w-[70%] flex flex-col gap-2 p-4">
          <div className="flex gap-2 text-[13px] text-blue-400 capitalize">
            Giỏ hàng / Thanh toán
          </div>
          <div className="font-semibold ">Thông tin nhận hàng</div>
          <div className="flex flex-col gap-4 p-2">
            <div className=" input-effect relative">
              <input
                id="input"
                className={`effect-16 ${isActive ? "has-content" : ""} `}
                type="text"
                placeholder=""
                onBlur={inputEffet}
              />
              <label>Email</label>
              <span className="focus-border"></span>
            </div>
            <div className=" input-effect relative">
              <input
                id="input"
                className={`effect-16 ${isActive ? "has-content" : ""} `}
                type="text"
                placeholder=""
                onBlur={inputEffet}
              />
              <label>Họ và tên</label>
              <span className="focus-border"></span>
            </div>
            <div className=" input-effect relative">
              <input
                id="input"
                className={`effect-16 ${isActive ? "has-content" : ""} `}
                type="text"
                placeholder=""
                onBlur={inputEffet}
              />
              <label>Số điện thoại</label>
              <span className="focus-border"></span>
            </div>
            <div className=" input-effect relative">
              <input
                id="input"
                className={`effect-16 ${isActive ? "has-content" : ""} `}
                type="text"
                placeholder=""
                onBlur={inputEffet}
              />
              <label>Địa chỉ(tùy chọn)</label>
              <span className="focus-border"></span>
            </div>
            <div className=" flex gap-2 justify-between mt-4">
              <div className="w-[33%] relative">
                <select
                  defaultValue={"DEFAULT"}
                  onChange={(e) => setDefaultvalue(e)}
                >
                  <option value="DEFAULT">---</option>
                  {dataAddress?.length > 0 &&
                    dataAddress.map((items) => {
                      return (
                        <option key={items.Id} value={items.Id}>
                          {items.Name}
                        </option>
                      );
                    })}
                </select>
                <label className="text-[12px] absolute top-[1px] left-2">
                  Tỉnh thành
                </label>
              </div>
              <div className="w-[33%] relative">
                <select
                  defaultValue={"DEFAULT"}
                  className={`${dataDistricts ? "" : "bg-gray-200  "}`}
                  onChange={(e) => setIdDistricts(e.target.value)}
                  disabled={!dataDistricts}
                >
                  <option value="DEFAULT">---</option>
                  {dataDistricts?.length > 0 &&
                    dataDistricts.map((items) => {
                      return (
                        <option key={items.Id} value={items.Id}>
                          {items.Name}
                        </option>
                      );
                    })}
                </select>
                <label className="text-[12px] absolute top-[1px] left-2">
                  Quận huyện(tùy chọn)
                </label>
              </div>
              <div className="w-[33%] relative">
                <select
                  defaultValue={"DEFAULT"}
                  className={`${dataWards ? "" : "bg-gray-200"}`}
                  onChange={(e) => setIdWard(e.target.value)}
                  disabled={!dataWards}
                >
                  <option value="DEFAULT">---</option>
                  {dataWards?.length > 0 &&
                    dataWards.map((items) => {
                      return (
                        <option key={items.Id} value={items.Id}>
                          {items.Name}
                        </option>
                      );
                    })}
                </select>
                <label className="text-[12px] absolute top-[1px] left-2">
                  Phường xã(tùy chọn)
                </label>
              </div>
            </div>

            <div className="input-effect relative">
              <textarea
                rows="3"
                cols="50"
                className={`effect-16 ${isActive ? "has-content" : ""} `}
                onBlur={inputEffet}
              ></textarea>
              <label>Ghi chú đặt hàng</label>
            </div>
            <div className="flex gap-4 justify-between items-center">
              <button
                onClick={() => navigate(-1)}
                className="text-right   text-blue-400 flex gap-1 justify-center items-center"
              >
                <span>
                  <FcPrevious size={15} color="red" />
                </span>
                <span> Giỏ hàng</span>
              </button>
              <button className="text-right py-2 px-4 border border-gray-500 rounded-lg hover:border-red-500 hover:text-red-500">
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <div className="p-5 border-b-2 text-center font-semibold text-[20px]">
            Đơn hàng ({cookies?.Cart?.length > 0 ? cookies?.Cart?.length : 0}
            sản phẩm)
          </div>
          <div className="p-2 border-b-2 ">
            {dataCart?.length > 0 ? (
              <>
                {dataCart?.map((items, index) => {
                  return (
                    <div className="px-5 py-1 flex gap-2  justify-between items-center">
                      <div className="flex gap-5 justify-start items-center">
                        <div className="w-10">
                          {items?.images?.length > 0 &&
                            items?.images
                              .filter((i, index) =>
                                indexs.some((i) => i === index)
                              )
                              ?.map((i, index) => {
                                return (
                                  <img
                                    key={index}
                                    className="object-cover h-10"
                                    src={i}
                                    alt="images cart"
                                  />
                                );
                              })}
                        </div>
                        <div className="capitalize">{items?.name}</div>
                      </div>
                      <div className="text-right">{items?.price}</div>
                    </div>
                  );
                })}
              </>
            ) : (
              <NoProduct />
            )}
          </div>
          <div className="flex justify-between items-center mt-2 px-2">
            <span> Tổng cộng</span>
            <span className="text-blue-500">{totalCart()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
