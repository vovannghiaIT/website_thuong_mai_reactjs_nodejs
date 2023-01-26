import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { formatVietnameseToString } from "../../../ultils/Common/formatVietnameseToString";
import * as actions from "../../../store/actions";
import { apiInsertBrands } from "../../../services";

const Insert = ({ setModal, modal }) => {
  const dispatch = useDispatch();
  const [payload, setPayload] = useState({
    name: "",
    slug: "",
    status: 1,
  });
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    dispatch(actions.getBrand());
  };
  const addBrands = async () => {
    let slug = formatVietnameseToString(payload.name);
    payload.slug = slug;
    await apiInsertBrands(payload);
    setModal(false);
    fetchData();
  };
  const addBrandKey = async (e) => {
    if (e.key === "Enter") {
      let slug = formatVietnameseToString(payload.name);
      payload.slug = slug;
      await apiInsertBrands(payload);
      setModal(false);
      fetchData();
    }
  };
  return (
    <div>
      <div>
        {modal && (
          <div
            className="fixed z-10 overflow-y-auto top-0 w-full left-0 "
            onClick={(e) => {
              e.stopPropagation();
              setModal(false);
            }}
          >
            <div className="flex items-center justify-center  pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-900 opacity-75" />
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
                &#8203;
              </span>
              <div
                className="mt-[100px] inline-block align-center bg-white rounded-lg text-left  shadow-xl transform transition-all w-[40%]"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <div className="bg-white flex gap-5  px-4 pt-5">
                  <div className="w-[100%]">
                    <label>Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-gray-100 p-2 mt-2 mb-3"
                      onChange={(e) =>
                        setPayload((prev) => ({
                          ...prev,
                          ["name"]: e.target.value,
                        }))
                      }
                      onKeyDown={(e) => {
                        addBrandKey(e);
                        setPayload({
                          name: "",
                          slug: "",
                          status: 1,
                        });
                      }}
                      required
                    />
                  </div>
                  {/* <div className="w-[60%]">
                    <div className="w-full border-[3px] border-dashed  h-[150px] flex items-center justify-center   ">
                      <label
                        htmlFor="images"
                        className="p-5 cursor-pointer flex items-center flex-col  justify-center gap-2"
                      >
                         <FaCamera size={50} color="blue" /> 
                        <span>Thêm ảnh</span>
                      </label>
                      <input
                        type="file"
                        hidden
                        id="images"
                        className="w-full bg-gray-100 p-2 mt-2 mb-3"
                       // onChange={handleFile}
                      />
                    </div>
                    
                    <div className="mt-2 ">
                      {imagesPreview?.map((item) => {
                        return (
                          <div key={item} className="relative w-1/3 h-1/3 ">
                            <img
                              src={item}
                              alt="preview"
                              className="w-10 h-10 object-cover rounded-md"
                            />
                            <span
                              title="Xóa"
                           //   onClick={() => handleDeleteImage(item)}
                              className="absolute top-0 right-0 p-2 cursor-pointer bg-gray-300 hover:bg-gray-400 rounded-full"
                            >
                               <ImBin /> 
                            </span>
                          </div>
                        ); 
                      })}
                    </div>
                  </div> */}
                </div>
                <div className="bg-gray-200 px-4 py-3 text-right">
                  <button
                    type="button"
                    className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                    onClick={() => setModal(false)}
                  >
                    <i className="fas fa-times"></i> Cancel
                  </button>
                  <button
                    type="submit"
                    onClick={() => {
                      addBrands();
                      setPayload({
                        name: "",
                        slug: "",
                        status: 1,
                      });
                    }}
                    className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
                  >
                    <i className="fas fa-plus"></i> Create
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Insert;
