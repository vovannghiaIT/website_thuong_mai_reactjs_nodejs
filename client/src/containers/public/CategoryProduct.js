import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { ItemsProduct } from "../../components";
import ButtonFilter from "../../components/ButtonFilter";
import * as actions from "../../store/actions";
import FilterProduct from "./FilterProduct";

const CategoryProduct = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.category);
  const { brands } = useSelector((state) => state.brand);
  const { operas } = useSelector((state) => state.opera);
  const [searchParams, setSearchParams] = useSearchParams();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    dispatch(actions.getCategories());
    dispatch(actions.getProduct());
    dispatch(actions.getBrand());
    dispatch(actions.getOpera());
  };

  let slug = params?.slug;
  let ItemSlugCategory = categories?.filter((items) => items?.slug === slug);
  const brandSlug = searchParams.get("brandSlug");

  const priceMin = searchParams.get("priceMin");
  const priceMax = searchParams.get("priceMax");

  let ItemBrands = brands?.filter((items) => items.slug === brandSlug);

  let CategoryId = ItemSlugCategory[0]?.id;
  let BrandId = ItemBrands[0]?.id;

  let ProductItemCategory = [];
  if (BrandId && priceMin && priceMax) {
    ProductItemCategory = products.filter(
      (items) =>
        items?.categoryId === CategoryId &&
        items.price > priceMin &&
        items.price < priceMax &&
        items?.brandId === BrandId &&
        items?.status === 1
    );
  } else if (priceMin && priceMax) {
    ProductItemCategory = products.filter(
      (items) =>
        items?.categoryId === CategoryId &&
        items.price > priceMin &&
        items.price < priceMax &&
        items?.status === 1
    );
  } else if (BrandId) {
    ProductItemCategory = products.filter(
      (items) =>
        items?.categoryId === CategoryId &&
        items?.brandId === BrandId &&
        items?.status === 1
    );
  } else {
    ProductItemCategory = products.filter(
      (items) => items?.categoryId === CategoryId && items?.status === 1
    );
  }

  const defaultValue = () => {
    setSearchParams();
  };
  let sortPrice = [];
  const priceUp = () => {
    return (sortPrice = []
      .concat(ProductCategory)
      .sort((a, b) => (a.price > b.price ? 1 : -1)));
  };

  let priceSortUp = [];
  const priceDown = () => {
    let price = products
      .filter((items) => items.status === 1)
      .map((items) => items.price);
    // let priceSort = price.sort(compareNumbersDown);
  };
  let ProductCategory = priceSortUp > 0 ? priceSortUp : ProductItemCategory;
  console.log(sortPrice);
  return (
    <div className=" bg-[#f1f1f1] flex flex-col gap-5  w-full ">
      <div className="bg-white w-full ">
        <div className="w-[80%] mx-auto pt-2 pb-2">
          Trang chủ / sản phẩm theo loại
        </div>
      </div>
      <div className=" w-[80%] mx-auto bg-white  rounded-lg flex justify-start items-start gap-4">
        <div className="w-[30%] ">
          <FilterProduct />
        </div>
        <div className="w-[70%] p-2 flex flex-col gap-5">
          <div className="flex items-center justify-start gap-2">
            <span>Sắp xếp theo</span>
            <span onClick={() => defaultValue()}>
              <ButtonFilter text={"Mặc định"} />
            </span>
            <span onClick={() => priceUp()}>
              <ButtonFilter text={"Giá tăng dần"} />
            </span>
            <span>
              <ButtonFilter text={"Giá giảm dần"} />
            </span>
            <span>
              <ButtonFilter text={"Mới nhất"} />
            </span>
          </div>
          <div className="flex gap-2">
            {CategoryId ? (
              <p className="flex gap-2">
                <>
                  <span>Sản phẩm theo loại :</span>
                  {categories?.length > 0 &&
                    categories
                      .filter((items) => items.id === CategoryId)
                      .map((item, index) => {
                        return (
                          <span className="text-red-500" key={index}>
                            "{item.name}"
                          </span>
                        );
                      })}
                </>
                {BrandId ? (
                  <>
                    <span>Với thương hiệu :</span>
                    {brands?.length > 0 &&
                      brands
                        .filter((items) => items.id === BrandId)
                        .map((item, index) => {
                          return (
                            <span className="text-red-500" key={index}>
                              "{item.name}"
                            </span>
                          );
                        })}
                  </>
                ) : (
                  ""
                )}
              </p>
            ) : (
              ""
            )}
            {priceMax && priceMin && (
              <div className="flex gap-2">
                Giá từ <span className="text-red-500">{priceMin}</span>
                đến <span className="text-red-500">{priceMax}</span>
              </div>
            )}
          </div>
          <div className="flex justify-start items-start gap-4">
            {ProductCategory?.length > 0 &&
              ProductCategory?.map((items, index) => {
                return (
                  <div key={index}>
                    <ItemsProduct
                      slug={items?.slug}
                      width={183.5}
                      height={250}
                      name={items?.name}
                      images={JSON.parse(items?.images)}
                      pricesale={items?.pricesale}
                      price={items?.price}
                    />
                  </div>
                );
              })}
            {ProductCategory?.length <= 0 && (
              <div className="text-center w-full bg-yellow-200 p-4 text-yellow-500">
                Chưa có sản phẩm
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
