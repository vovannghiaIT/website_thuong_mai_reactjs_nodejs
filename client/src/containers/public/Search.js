import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { ItemsProduct, NoProduct } from "../../components";
import * as actions from "../../store/actions";
const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { search } = useSelector((state) => state.search);

  const dispatch = useDispatch();
  useEffect(() => {
    fetchSearch();
  }, [search]);

  const fetchSearch = async () => {
    let search = searchParams.get("key");
    dispatch(actions.getSearchProduct(search));
  };

  // console.log(search);
  return (
    <div className="w-full bg-[#f1f1f1]">
      <div className="bg-white w-full ">
        <div className="w-[90%] mx-auto text-[13px]  pt-1 pb-1">
          Trang chủ / Tìm kiếm sản phẩm
        </div>
      </div>
      <div className=" w-[90%] mx-auto mt-2 bg-white  ">
        <p className="p-1">
          Tìm kiếm sản phẩm :
          <span className="text-red-500 px-2">{searchParams.get("key")}</span>
        </p>
        <div className="p-2 flex gap-2  flex-wrap w-full mx-auto">
          {search?.length > 0 &&
            search
              .filter((item) => item.status === 1)
              .map((items) => {
                return (
                  <div key={items.id}>
                    <ItemsProduct
                      slug={items?.slug}
                      width={180}
                      height={250}
                      name={items?.name}
                      images={JSON.parse(items?.images)}
                      pricesale={items?.pricesale}
                      price={items?.price}
                    />
                  </div>
                );
              })}
          {search.length <= 0 && <NoProduct />}
        </div>
      </div>
    </div>
  );
};

export default Search;
