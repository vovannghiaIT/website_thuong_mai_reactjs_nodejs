import React, { useEffect } from "react";
import * as actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { ItemsProduct } from "../../components";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Thumbs,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
  Grid,
  Keyboard,
} from "swiper";
//Swiper
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/bundle";
import "swiper/css/grid";
import { useParams } from "react-router-dom";

const ProductCategory = ({ categoryId }) => {
  //console.log(dataProductCategory);
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const params = useParams();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    dispatch(actions.getProduct());
  };

  useEffect(() => {
    feachDataDetail();
  }, []);

  const feachDataDetail = (slug) => {
    let payload = slug;
    //console.log(slug);
    dispatch(actions.getProductDetail(payload));
    window.scrollTo(0, 0);
  };

  // const { dataDetail } = useSelector((state) => state.product);

  //console.log(products);
  return (
    <div>
      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        grid={{
          rows: 1,
        }}
        breakpoints={{
          769: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
        scrollbar={true}
        navigation={true}
        modules={[Keyboard, Scrollbar, Navigation, Pagination, Grid]}
        className="mySwiper"
      >
        {products?.length > 0 &&
          products
            .filter(
              (item) => item.categoryId === categoryId && item.status === 1
            )
            .map((items, index) => {
              return (
                <SwiperSlide key={index}>
                  <ItemsProduct
                    onClick={() => feachDataDetail(items?.slug)}
                    sale
                    slug={items?.slug}
                    width={183.5}
                    name={items?.name}
                    images={JSON.parse(items?.images)}
                    pricesale={items?.pricesale}
                    price={items?.price}
                  />
                </SwiperSlide>
              );
            })}
      </Swiper>
    </div>
  );
};

export default ProductCategory;
