import React, { useState, useEffect } from "react";
import icons from "../../../ultils/icons";
import { apiInsertCategories } from "../../../services";
import { useDispatch, useSelector } from "react-redux";
import { apiUploadImages } from "../../../services";
import * as actions from "../../../store/actions";
import {
  formatVietnameseToString,
  formatUpCaseToString,
} from "../../../ultils/Common/formatVietnameseToString";

const Insert = ({ modal, setModal }) => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.category);
  const [imagesPreview, setImagesPreview] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    dispatch(actions.getCategories());
  };

  const [payload, setPayload] = useState({
    name: "",
    code: "",
    slug: "",
    images: "",
    parentid: "0",
    value: "",
    status: 1,
  });
  const { FaCamera, ImBin } = icons;
  const addCategory = async () => {
    let slug = formatVietnameseToString(payload.name);
    payload.slug = slug;

    let code = formatUpCaseToString(payload.name);
    payload.code = code;

    await apiInsertCategories(payload);
    setModal(false);
    fetchData();
    setImagesPreview([]);
  };

  const handleFile = async (e) => {
    e.stopPropagation();
    const files = e.target.files;
    //biến imhg chứa link ảnh
    let images = [];
    const formData = new FormData();
    for (let i of files) {
      formData.append("file", i);
      formData.append(
        "upload_preset",
        process.env.REACT_APP_UPLOAD_ASSETS_NAME
      );
      const response = await apiUploadImages(formData);
      // console.log(response);
      if (response.status === 200) {
        images = [...images, response.data?.secure_url];
      }

      setImagesPreview((prev) => [...prev, ...images]);
      setPayload((prev) => ({
        ...prev,
        images: [...prev.images, ...images],
      }));

      // setPayload((prev) => ({
      //   ...prev,
      //   images: JSON.stringify([...payload.images, ...images]),
      // }));
    }
  };
  const handleDeleteImage = (image) => {
    setImagesPreview((prev) => prev?.filter((item) => item !== image));
    setPayload((prev) => ({
      ...prev,
      images: prev.images?.filter((item) => item !== image),
    }));
  };

  return (
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
              className="mt-[100px] inline-block align-center bg-white rounded-lg text-left  shadow-xl transform transition-all w-[70%]"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className="bg-white flex gap-5  px-4 pt-5">
                <div>
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
                  />
                  <label>Values</label>
                  <input
                    type="text"
                    id="value"
                    className="w-full bg-gray-100 p-2 mt-2 mb-3"
                    onChange={(e) =>
                      setPayload((prev) => ({
                        ...prev,
                        ["value"]: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="w-[60%]">
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
                      onChange={handleFile}
                    />
                  </div>
                  {/* multiple chọn được nhìu hình */}
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
                            onClick={() => handleDeleteImage(item)}
                            className="absolute top-0 right-0 p-2 cursor-pointer bg-gray-300 hover:bg-gray-400 rounded-full"
                          >
                            <ImBin />
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
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
                    addCategory();
                    setPayload({
                      name: "",
                      code: "",
                      slug: "",
                      images: "",
                      parentid: "0",
                      value: "",
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
  );
};
export default Insert;
