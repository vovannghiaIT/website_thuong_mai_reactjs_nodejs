import React, { memo } from "react";
import { useSelector } from "react-redux";
import ItemsImg from "./ItemsImg";
import { Link } from "react-router-dom";

const ItemsProduct = ({
  sale,
  contextleft,
  contextright,
  name,
  images,
  pricesale,
  price,
  width,
  height,
  slug,
  onClick,
}) => {
  const { products } = useSelector((state) => state.product);
  const { categories } = useSelector((state) => state.category);

  return (
    <>
      {!contextleft && !contextright && (
        <Link
          to={"/productdetail/" + slug}
          className={`shadow-25% flex gap-2 flex-col p-2  bg-white rounded-md overflow-hidden cursor-pointer `}
          style={{ width, height }}
          onClick={onClick}
        >
          <ItemsImg images={images} homeItem />

          {sale && (
            <div className="uppercase text-[10px] bg-[#ff8a97] rounded-xl py-[1px] text-center text-white">
              Đã bán: 35
            </div>
          )}
          <h3 className="font-semibold">{name}</h3>
          <div className="flex gap-2">
            {pricesale === 0 ? (
              <>
                <p className="text-red-500 text-[15px] text-center font-medium">
                  {price}đ
                </p>
              </>
            ) : (
              <>
                <p className="text-red-500 text-[15px] font-medium">
                  {pricesale}đ
                </p>
                <p className="text-gray-400 line-through text-[14px]">
                  {price}đ
                </p>
              </>
            )}
          </div>
        </Link>
      )}

      {contextleft &&
        products?.length > 0 &&
        products
          .filter((item) => item.status === 1 && item.categoryId === 1)
          .map((items, index) => {
            return (
              <Link
                to={"productdetail/" + items?.slug}
                className={`shadow-25% flex gap-2 flex-col p-2 w-[173.5px] h-[271px] bg-white rounded-md overflow-hidden cursor-pointer`}
                key={index}
              >
                <ItemsImg images={JSON.parse(items?.images)} homeItem />

                {sale && (
                  <div className="uppercase text-[10px] bg-[#ff8a97] rounded-xl py-[1px] text-center text-white">
                    Đã bán: 35
                  </div>
                )}
                <h3 className="font-semibold">{items.name}</h3>
                <div className="flex gap-2 items-center justify-center">
                  {items.pricesale === 0 ? (
                    <>
                      <p className="text-red-500 text-[15px] text-center font-medium">
                        {items.price}đ
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-red-500 text-[15px] font-medium">
                        {items.pricesale}đ
                      </p>
                      <p className="text-gray-400 line-through text-[14px]">
                        {items.price}đ
                      </p>
                    </>
                  )}
                </div>
              </Link>
            );
          })}
      {contextright &&
        products?.length > 0 &&
        products
          .filter((item) => item.status === 1 && item.categoryId === 3)
          .map((items, index) => {
            return (
              <Link
                to={"productdetail/" + items?.slug}
                className={`shadow-25% flex gap-2 flex-col p-2 w-[173.5px] h-[271px] bg-white rounded-md overflow-hidden cursor-pointer`}
                key={index}
              >
                <ItemsImg images={JSON.parse(items?.images)} homeItem />

                {sale && (
                  <div className="uppercase text-[10px] bg-[#ff8a97] rounded-xl py-[1px] text-center text-white">
                    Đã bán: 35
                  </div>
                )}
                <h3 className="font-semibold">{items.name}</h3>
                <div className="flex gap-2 items-center justify-center">
                  {items.pricesale === 0 ? (
                    <>
                      <p className="text-red-500 text-[15px] text-center font-medium">
                        {items.price}đ
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-red-500 text-[15px] font-medium">
                        {items.pricesale}đ
                      </p>
                      <p className="text-gray-400 line-through text-[14px]">
                        {items.price}đ
                      </p>
                    </>
                  )}
                </div>
              </Link>
            );
          })}
    </>
  );
};

export default ItemsProduct;
