import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import icons from "../../ultils/icons";
import parse from "html-react-parser";

import ProductImagesSlider from "./ProductImagesSlider";
import ProductCategory from "./ProductCategory";
import { Cookies, useCookies } from "react-cookie";
import { apiUpdateProducts } from "../../services";

import { ToastContainer, toast } from "react-toastify";

const ProductDetail = () => {
  const [productDetail, setproductDetail] = useState({});
  const [cookies, setCookie, getAll] = useCookies(["Cart"]);
  const { AiOutlineHome, GrNext, GrPrevious, AiFillStar, GiShoppingCart } =
    icons;
  const params = useParams();

  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  let payload = params.slug;
  const { dataDetail } = useSelector((state) => state.product);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    dispatch(actions.getProductDetail(payload));
  };

  //
  const handleStar = (star) => {
    let stars = [];
    for (let i = 1; i <= +star; i++)
      stars.push(
        <AiFillStar className="star-item" size={18} color="yellow" key={i} />
      );
    return stars;
  };
  const handleNumberIncreasing = (count) => {
    if (count < dataDetail?.number) {
      setCount(count + 1);
    }
  };
  const handleNumberReduce = (count) => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleOnchageInput = (e) => {
    if (e.target.value > dataDetail?.number) {
      setCount(dataDetail?.number);
    } else {
      setCount(e.target.value);
    }
  };

  const indexs = [0];

  const submitCart = async (dataDetail) => {
    let idCart = dataDetail?.id;
    let name = dataDetail?.name;
    let price =
      dataDetail?.pricesale > 0 ? dataDetail?.pricesale : dataDetail?.price;
    let number = count;
    let img = JSON.parse(dataDetail?.images);
    let brands = dataDetail?.brands?.name;
    let Cartnumber = dataDetail?.number;
    // let images = img.filter((i, index) => indexs.some((i) => i === index))

    const cartArray = [
      {
        id: idCart,
        name: name,
        price: price,
        number: number,
        images: img,
        brands: brands,
        Cartnumber: Cartnumber,
      },
    ];

    if (dataDetail?.number >= number) {
      toast.success("Thêm vào giỏ hàng thành công!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      let cart = "";
      let cartNumber = "";
      if (cookies.Cart) {
        let dataCart = cookies?.Cart?.find((item) => item?.id === idCart);
        let dataList = cookies?.Cart?.filter((item) => item?.id !== idCart);
        // console.log(dataCart);
        // console.log(dataList);
        if (dataCart) {
          cartNumber = {
            ...dataCart,
            number: parseInt(dataCart?.number) + parseInt(count),
          };
          // console.log("CartNumber:", cartNumber);
        }
        if (dataList) {
          cart = dataList;
          // console.log("Cart:", cart);
        }
        // console.log("tole", [...cart, cartNumber]);
        setCookie("Cart", [...cart, cartNumber], { path: "/" });
        if (cartNumber === "") {
          setCookie("Cart", [...cookies.Cart, ...cartArray], { path: "/" });
        }
      } else {
        setCookie("Cart", cartArray, { path: "/" });
      }
      let dataNumberDetail = dataDetail?.number - parseInt(count);
      let img = JSON.parse(dataDetail?.images);
      let description = JSON.parse(dataDetail?.description);
      await apiUpdateProducts({
        ...dataDetail,
        description: description,
        images: img,
        number: dataNumberDetail,
      });
      fetchData();
    } else {
      toast.warn("Thêm vào giỏ hàng thất bại!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };
  return (
    <div className="bg-[#f1f1f1]">
      <div className="py-2  shadow-lg bg-white  ">
        <div className="w-[80%] mx-auto text-[13px] flex items-center gap-1 capitalize">
          <AiOutlineHome color="red" />
          Trang chủ / {dataDetail?.name}
        </div>
      </div>
      <div className="bg-white w-[80%] mx-auto mt-4 p-4">
        <h2 className="font-medium capitalize text-[20px] py-2">
          {dataDetail?.name}
        </h2>
        <div className="flex w-full gap-5 justify-between ">
          <div className="flex w-[70%] gap-3 justify-between">
            <div className="w-[40%]  ">
              <div className="flex w-full flex-col gap-5">
                {dataDetail?.images && (
                  <ProductImagesSlider
                    images={JSON.parse(dataDetail?.images)}
                  />
                )}
              </div>
            </div>
            <div className="w-[60%]  flex flex-col gap-5">
              <div className="p-4 bg-gray-200 flex justify-start gap-2 rounded-md">
                <span className="text-[20px] text-red-500 ">
                  {dataDetail?.pricesale}
                  <span className="underline">đ</span>
                </span>
                <span className="line-through mt-1">
                  {dataDetail?.price}
                  <span className="underline">đ</span>
                </span>
              </div>
              <div className="flex gap-2 items-center justify-start">
                <span> Đánh giá: </span>
                <div className="flex items-center justify-start gap-1">
                  {handleStar(dataDetail?.star)}
                </div>
              </div>
              <div>
                {" "}
                Số lượng còn:{dataDetail?.number > 0 ? dataDetail?.number : 0}
              </div>
              <div className="flex gap-2 p-3">
                <button
                  className="text-red-500 border w-[40px] h-[40px] rounded-lg hover:border-red-500"
                  onClick={() => handleNumberReduce(count)}
                >
                  -
                </button>
                <button
                  className="text-red-500 border w-[40px] h-[40px] rounded-lg  hover:border-red-500"
                  onClick={() => handleNumberIncreasing(count)}
                >
                  +
                </button>
                <input
                  type="number"
                  className="outline-none border rounded-lg w-[50px]"
                  value={count}
                  min="1"
                  max={dataDetail?.number}
                  onChange={(e) => handleOnchageInput(e)}
                />
              </div>
              <div className="flex gap-2 justify-center items-center">
                <button className="w-[70%] py-1 cursor-pointer relative img__hover2 overflow-hidden bg-red-600 rounded-lg text-white font-semibold">
                  <div className="bg-[#f2f2f2] w-full rounded-lg h-[58px]   absolute  bg__hover2"></div>
                  <span className="uppercase"> Mua ngay</span>
                  <br />
                  <span className="font-normal text-[10px]">
                    (mua ngay hoặc giao lấy tại cửa hàng)
                  </span>
                </button>

                <button
                  className="flex justify-center items-center  flex-col w-[30%] py-2 text-[10px] rounded-lg text-red-600 hover:text-white bg-white hover:bg-red-600  border-2 border-red-600"
                  onClick={() => submitCart(dataDetail)}
                >
                  <GiShoppingCart size={20} />
                  <span> Thêm vào giỏ</span>
                </button>
                <ToastContainer
                  position="top-right"
                  autoClose={1000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </div>
              <ul className="text-[12px] list-disc px-10">
                <li>
                  Đón đầu thử thách, bứt phá mọi tựa game - Chip MediaTek
                  Dimensity 920 5G 8 nhân siêu mạnh mẽ
                </li>
                <li>
                  Không gian giải trí đỉnh cao - Màn hình AMOLED 6.67 inch sắc
                  nét, tần số quét 120Hz mượt mà
                </li>
                <li>
                  Sạc nhanh thần tốc, tràn đầy năng lượng - Dung lượng pin lớn
                  4500mAh, sạc nhanh đến 120W
                </li>
                <li>
                  Trải nghiệm nhiếp ảnh cực đỉnh - Camera chính 108MP, hỗ trợ
                  nhiều chế độ chụp linh hoạt
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[30%] ">
            <div className="bg-[#fff3cd] text-[#856404] font-semibold p-6 rounded-lg">
              Gọi ngay<span className="text-red-500"> 0824540872</span> Để được
              tư vấn tốt nhất !
            </div>
            <ul className="border rounded-xl mt-4 p-4">
              <li>
                Tình trạng:
                <span
                  className={
                    dataDetail?.number > 0
                      ? "text-green-500 px-2"
                      : "text-red-500 px-2"
                  }
                >
                  {dataDetail?.number > 0 ? "Còn hàng" : "Hết hàng"}
                </span>
              </li>
              <li>
                Thương hiệu:
                <span className="text-green-500 px-2 ">
                  {dataDetail?.brands?.name || "Không có"}
                </span>
              </li>
              <li>
                Loại:
                <span className="text-green-500 px-2">
                  {dataDetail?.operas?.name || "Không có"}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[70%] mt-4 border-2 p-3 rounded-xl ">
          <h2>Thông tin chi tiết</h2>

          <div>
            {dataDetail?.description &&
              parse(dataDetail?.description?.slice(1, -1))}
          </div>
        </div>
        <div className="w-[70%] mt-4 border-2 p-3  rounded-xl">
          <h2 className="font-semibold">Sản phẩm liên quan</h2>
          <div>
            <ProductCategory categoryId={dataDetail?.categoryId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
