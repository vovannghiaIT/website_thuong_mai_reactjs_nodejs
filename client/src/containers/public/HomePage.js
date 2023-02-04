import React, { useEffect, useState } from "react";
import imgSlider from "../../assets/img/big_bn_slide.png";
import Slider from "react-slick";
import icons from "../../ultils/icons";
import {
  ItemsProduct,
  FillterItem,
  ItemsContext,
  ItemsImg,
  Loading,
} from "../../components";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import { path } from "../../ultils/constant";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "none" }} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "none" }} />;
}

const HomePage = () => {
  const { GrPrevious, GrNext } = icons;
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.category);
  const { products } = useSelector((state) => state.product);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
  }, []);
  const fetchData = async () => {
    dispatch(actions.getCategories());
    dispatch(actions.getProduct());
  };

  //Panginate
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(16);

  const endOffset = itemOffset + itemsPerPage;
  const currentItemsCategories = categories
    .filter((item) => item.status === 1)
    .slice(itemOffset, endOffset);

  const slider = React.useRef(null);
  let settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const stroll = () => {
    window.scrollTo(0, 0);
  };
  const indexs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="w-full border border-1 overflow-hidden bg-gray-200 ">
      <img src={imgSlider} alt="img slider " />
      <div className="w-4/5 mx-auto absolute top-[300px] left-32 rounded-lg overflow-hidden">
        <Slider ref={slider} {...settings}>
          <div>
            <h3 className="mr-2">
              <img
                src="./img/slide-img1.png"
                alt="anh"
                className="rounded-lg"
              />
            </h3>
          </div>
          <div>
            <h3 className="mr-2">
              <img
                src="./img/slide-img2.png"
                alt="anh"
                className="rounded-lg"
              />
            </h3>
          </div>
          <div>
            <h3 className="mr-2">
              <img
                src="./img/slide-img1.png"
                alt="anh"
                className="rounded-lg"
              />
            </h3>
          </div>
        </Slider>
        <div className="overflow-hidden w-4/5">
          <button
            onClick={() => slider?.current?.slickPrev()}
            className=" absolute top-10 left-0 pt-11 pr-4 pb-10 pl-0 text-left  clip__pathPrev  bg-gray-100"
          >
            <GrPrevious />
          </button>
          <button
            onClick={() => slider?.current?.slickNext()}
            className="absolute top-10 right-1 pt-10 pr-0 pb-11 pl-4 clip__pathNext  bg-gray-100"
          >
            <GrNext />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-4/5 mx-auto">
        <div className=" flex mt-[90px] justify-center gap-3">
          <div className="w-[25%] bg-white py-6 text-[17px] px-2 flex items-center gap-3  justify-start rounded-lg font-light">
            <span>
              <img src="./img/img_protect.png" />
            </span>
            <span>Sản phẩm an toàn</span>
          </div>
          <div className="w-[25%] bg-white py-6 text-[17px] px-2 flex items-center gap-3  justify-start rounded-lg font-light">
            <span>
              <img src="./img/img_hand.png" />
            </span>
            <span>Chất lượng cam kết</span>
          </div>
          <div className="w-[25%] bg-white py-6 text-[17px] px-2 flex items-center gap-3  justify-start rounded-lg font-light">
            <span>
              <img src="./img/img_tick.png" />
            </span>
            <span>Dịch vụ vượt trội</span>
          </div>
          <div className="w-[25%] bg-white py-6 text-[17px] px-2 flex items-center gap-3  justify-start rounded-lg font-light">
            <span>
              <img src="./img/img_truck.png" />
            </span>
            <span>Giao hàng nhanh chóng</span>
          </div>
        </div>
        <div className=" p-3   bg-white rounded-lg">
          <div className="flex justify-between">
            <h1 className="font-medium uppercase">Danh mục nổi bật</h1>
            <Link
              onClick={() => stroll()}
              to={path.CATEGORYALL}
              className="text-[12px] border bg-slate-200 hover:border-red-500 hover:text-red-500 px-2 py-1 rounded-lg"
            >
              Xem tất cả
            </Link>
          </div>
          <div className="flex gap-2 flex-wrap mt-4">
            {loading ? (
              <Loading />
            ) : (
              <>
                {currentItemsCategories?.length > 0 &&
                  currentItemsCategories.map((items, index) => {
                    return (
                      <Link
                        to={"/category-product/" + items.slug}
                        onClick={() => stroll()}
                        key={index}
                        className="flex flex-col justify-center items-center h-[126px] min-w-[5%] max-w-[12%] shadow-4md border font-light text-[13px] hover:text-red-500 hover:shadow-red-500/40 rounded-lg cursor-pointer"
                      >
                        <div className="w-[50%]">
                          <ItemsImg images={JSON.parse(items?.images)} />
                        </div>
                        <span>{items.name}</span>
                      </Link>
                    );
                  })}
              </>
            )}
          </div>
        </div>
        <div className="  liner__gradient p-5 rounded-xl">
          <div className="flex gap-[25%]">
            <div className="uppercase flex items-center gap-1 font-semibold text-yellow-300">
              <img src="./img/flash.png" className="object-cover w-5 h-5" />
              Flash Sale
            </div>
            <div className="text-center text-white  ">
              Giảm ngay 120k (áp dụng cho các đơn hàng trên 500k)
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-5 ">
            {loading ? (
              <Loading />
            ) : (
              <>
                {products?.length > 0 &&
                  products
                    .filter((item) => item.pricesale !== 0 && item.status === 1)
                    .map((items, index) => {
                      return (
                        <div key={index}>
                          <ItemsProduct
                            sale
                            slug={items?.slug}
                            width={183.5}
                            height={300}
                            name={items?.name}
                            images={JSON.parse(items?.images)}
                            pricesale={items?.pricesale}
                            price={items?.price}
                          />
                        </div>
                      );
                    })}
              </>
            )}
          </div>
        </div>
        <div className="bg-white p-2 rounded-xl">
          <div className="flex gap-4">
            <FillterItem text={"Gợi ý cho bạn"} images={"goiy.png"} link={""} />
            <FillterItem
              text={"Xả hàng giảm sốc"}
              images={"iconxahang.png"}
              link={"Xahang"}
            />
            <FillterItem
              text={"Sale cuối hè"}
              images={"iconphan.png"}
              link={"Sale"}
            />
            <FillterItem
              text={"Deal ngon bổ rẻ"}
              images={"icon99k.png"}
              link={"Deal"}
            />
          </div>
          <div className="flex gap-2 mt-2 flex-wrap">
            {loading ? (
              <Loading />
            ) : (
              <>
                {products?.length > 0 &&
                  products
                    .filter((item) => item.pricesale !== 0 && item.status === 1)
                    .map((items, index) => {
                      return (
                        <div key={index}>
                          <ItemsProduct
                            sale
                            slug={items?.slug}
                            width={158.5}
                            height={250}
                            name={items?.name}
                            images={JSON.parse(items?.images)}
                            pricesale={items?.pricesale}
                            price={items?.price}
                          />
                        </div>
                      );
                    })}
              </>
            )}
          </div>
          <button className="rounded-md shadow-25% text-[16px] text-center w-full mt-5 p-1 hover:shadow-red-500 hover:text-red">
            Xem tất cả
          </button>
        </div>
        <div>
          <ItemsContext text={"Điện thoại nổi bật"} left />
        </div>
        <div>
          <ItemsContext text={"Lattop hot"} right />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
