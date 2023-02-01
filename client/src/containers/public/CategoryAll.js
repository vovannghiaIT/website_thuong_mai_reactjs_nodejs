import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ItemsImg } from "../../components";

const CategoryAll = () => {
  const { categories } = useSelector((state) => state.category);
  // console.log(categories);
  return (
    <div className="bg-[#e4e4e4] flex flex-col gap-4 w-full">
      <div className="w-[100%] mx-auto bg-white">
        <div className="w-[80%] mx-auto pt-2 pb-2">
          Trang chủ / Tất cả loại sản phẩm
        </div>
      </div>
      <div className="bg-white w-[80%] rounded-lg mx-auto p-2 ">
        <h1 className="font-semibold text-red-500 text-[22px]">
          Tất cả danh mục
        </h1>
        <div className="mt-2 flex justify-start items-start gap-4 flex-wrap p-2">
          {categories?.length > 0 &&
            categories
              .filter((items) => items.status === 1)
              .map((items, index) => {
                return (
                  <Link
                    to={"/category-product/" + items?.slug}
                    className="border border-gray-400 shadow-25% cursor-pointer hover:text-red-500 hover:border-red-500 w-[23.5%] flex justify-start items-center p-4 gap-4 rounded-lg"
                    key={index}
                  >
                    <div className="w-[25%]">
                      <ItemsImg images={JSON.parse(items?.images)} />
                    </div>
                    <div className="text-start capitalize">{items?.name}</div>
                  </Link>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default CategoryAll;
