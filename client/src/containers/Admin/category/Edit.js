import React, { useEffect, useState } from "react";
import icons from "../../../ultils/icons";
import { apiUpdateCategories, apiUploadImages } from "../../../services";
import {
  formatVietnameseToString,
  formatUpCaseToString,
} from "../../../ultils/Common/formatVietnameseToString";

import * as actions from "../../../store/actions";
import { useDispatch } from "react-redux";
import { Loading } from "../../../components";

const Edit = ({ modalEdit, setmodalEdit, dataCategoryEdit }) => {
  const [imagesPreview, setImagesPreview] = useState([]);
  const { FaCamera, ImBin } = icons;
  const [loading, setLoading] = useState(false);
  const [invalidFields, setInvalidFields] = useState([]);
  const dispatch = useDispatch();

  const [payload, setPayload] = useState(() => {
    const initData = {
      id: "",
      name: dataCategoryEdit?.name || "",
      code: dataCategoryEdit?.code || "",
      slug: dataCategoryEdit?.slug || "",
      images: dataCategoryEdit?.images || "",
      parentid: dataCategoryEdit?.parentid || "0",
      value: dataCategoryEdit?.value || "",
      status: dataCategoryEdit?.status || 1,
    };
    return initData;
  });

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    dispatch(actions.getCategories());
  };

  useEffect(() => {
    if (modalEdit === true) {
      if (dataCategoryEdit) {
        let img = JSON.parse(dataCategoryEdit?.images);
        img && setImagesPreview(img);
        // setCategoryEdit({
        //   ...categoryEdit,
        //   images: categoryEdit?.images,
        // });
      }
    }
  }, [dataCategoryEdit]);

  useEffect(() => {
    if (modalEdit === true) {
      setPayload({
        id: "",
        name: dataCategoryEdit?.name,
        code: dataCategoryEdit?.code,
        slug: dataCategoryEdit?.slug,
        images: JSON.parse(dataCategoryEdit?.images),
        parentid: dataCategoryEdit?.parentid,
        value: dataCategoryEdit?.value,
        status: dataCategoryEdit?.status,
      });
    }
  }, [dataCategoryEdit]);

  const handleFile = async (e) => {
    e.stopPropagation();
    setLoading(true);
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
      setLoading(false);
      setImagesPreview((prev) => [...prev, ...images]);
      setPayload((prev) => ({
        ...prev,
        images: [...prev.images, ...images],
      }));
    }
  };
  const handleDeleteImage = (image) => {
    // let img = JSON.parse(image);

    setImagesPreview((prev) => prev?.filter((item) => item !== image));

    // setCategoryEdit((prev) => ({
    //   ...prev,
    //   images: JSON.parse(""),
    // }));

    setPayload((prev) => ({
      ...prev,
      images: prev.images?.filter((item) => item !== image),
    }));
  };

  const submitUpdate = async () => {
    let id = dataCategoryEdit?.id;
    payload.id = id;
    let slug = formatVietnameseToString(payload.name);
    payload.slug = slug;

    let code = formatUpCaseToString(payload.name);
    payload.code = code;
    let invalids = validate(payload);
    if (invalids === 0) {
      await apiUpdateCategories(payload);

      setmodalEdit(false);
      fetchData();
      setImagesPreview([]);
    }
  };
  const validate = (payload) => {
    let invalids = 0;
    let fields = Object.entries(payload);
    fields.forEach((item) => {
      if (item[1] === "") {
        setInvalidFields((prev) => [
          ...prev,
          {
            name: item[0],
            message: "Bạn không được bỏ trống trường này.",
          },
        ]);
        invalids++;
      }
    });

    return invalids;
  };
  return (
    <div>
      {modalEdit && (
        <div
          className="fixed z-10 overflow-y-auto top-0 w-full left-0 "
          onClick={(e) => {
            e.stopPropagation();
            setmodalEdit(false);
            setImagesPreview([]);
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
                    value={payload.name}
                    className="w-full bg-gray-100 p-2 mt-2 mb-3"
                    onChange={(e) =>
                      setPayload((prev) => ({
                        ...prev,
                        ["name"]: e.target.value,
                      }))
                    }
                  />
                   {invalidFields.length > 0 &&
                    invalidFields.some((i) => i.name === "name") && (
                      <small className="text-red-500 italic ">
                        {invalidFields.find((i) => i.name === "name")?.message}
                      </small>
                    )}
                  <label>Values</label>
                  <input
                    type="text"
                    id="value"
                    value={payload.value}
                    className="w-full bg-gray-100 p-2 mt-2 mb-3"
                    onChange={(e) =>
                      setPayload((prev) => ({
                        ...prev,
                        ["value"]: e.target.value,
                      }))
                    }
                  />
                   {invalidFields.length > 0 &&
                    invalidFields.some((i) => i.name === "value") && (
                      <small className="text-red-500 italic ">
                        {invalidFields.find((i) => i.name === "value")?.message}
                      </small>
                    )}
                </div>
                <div className="w-[60%]">
                  <div className="w-full border-[3px] border-dashed  h-[150px] flex items-center justify-center   ">
                  {loading ? (
                      <Loading />
                    ) : (
                      <>
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
                          className="w-full bg-gray-100 p-2 mt-2"
                          onChange={handleFile}
                        />
                      </>
                    )}
                     {invalidFields.length > 0 &&
                    invalidFields.some((i) => i.name === "images") && (
                      <small className="text-red-500 italic ">
                        {invalidFields.find((i) => i.name === "images")?.message}
                      </small>
                    )}
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
                  onClick={() => {
                    setmodalEdit(false);
                    setImagesPreview([]);
                  }}
                >
                  <i className="fas fa-times"></i> Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
                  onClick={() => submitUpdate()}
                >
                  <i className="fas fa-plus"></i> Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Edit;
