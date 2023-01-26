import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ItemsImg } from "../../../components";
import * as actions from "../../../store/actions";
import Edit from "./Edit";
import Insert from "./Insert";
import icons from "../../../ultils/icons";
import Swal from "sweetalert2";
import { apiUpdateBrands } from "../../../services";

const HomeBrand = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [dataBrandEdit, setDataBrandEdit] = useState({});
  const { brands } = useSelector((state) => state.brand);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    dispatch(actions.getBrand());
  };
  // console.log(brands);
  const { BiTrash } = icons;

  const submitStatus = (items) => {
    Swal.fire({
      title: "Bạn muốn xóa? <br/>" + items.name,
      text: "Bạn có thể khôi phục tại thùng rác!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "vâng, chắc chắn rồi!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Xóa thành công!", "Bạn đã đưa vào thùng rác.", "success");
        // let img = JSON.parse(items.images);
        await apiUpdateBrands({ ...items, status: 0 });
        fetchData();
      }
    });
  };
  return (
    <div>
      <div className="w-full">
        <div className="w-[90%]  mx-auto">
          <div className="bg-white mt-12">
            <div className="w-full  bg-gray-100">
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="flex flex-col">
                  <div className="mb-4">
                    <h1 className="text-3xl mt-7 font-bolder leading-tight text-gray-900">
                      Tất cả Thương hiệu
                    </h1>
                  </div>
                  <div className="-mb-2 py-4 flex flex-wrap flex-grow justify-between">
                    <div className="flex items-center py-2">
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-search"
                        type="text"
                        placeholder="Search"
                      />
                    </div>
                    <div className="flex items-center py-2 gap-3">
                      <button
                        className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
                        onClick={() => setModal(true)}
                      >
                        Thêm
                      </button>
                      <div>
                        <Link to="/admin/brand/trash">
                          <button className="px-6 py-2 bg-red-500 rounded-md relative">
                            <BiTrash color="white" size={20} />

                            {brands?.length > 0 &&
                              brands
                                .filter((item) => item.status === 0)
                                .map((iCount, index) => {
                                  let count = index + 1;
                                  return (
                                    <span
                                      key={index}
                                      className="absolute top-[-20%] right-[-10%] text-white w-[25px] h-[25px] text-center bg-blue-600 rounded-full"
                                    >
                                      {count}
                                    </span>
                                  );
                                })}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
                      <table className="min-w-full">
                        <thead>
                          <tr className="border-b border-gray-200 bg-white leading-4 tracking-wider text-base text-gray-900">
                            <th
                              className="px-6 py-5 text-left bg-white w-full"
                              colSpan="12"
                            >
                              <input
                                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                type="checkbox"
                              />
                            </th>
                          </tr>
                          <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                            <th className="px-6 py-3 text-left font-medium ">
                              <input
                                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                type="checkbox"
                              />
                            </th>
                            <th className="px-6 py-3 text-left font-medium">
                              Name
                            </th>
                            {/* <th className="px-6 py-3 text-left font-medium">
                              Images
                            </th> */}
                            <th className="px-6 py-3 text-left font-medium">
                              Slug
                            </th>
                            <th className="px-6 py-3 text-left font-medium">
                              Status
                            </th>
                            <th className="px-6 py-3 text-left font-medium">
                              Created
                            </th>
                            <th className="px-6 py-3 text-left font-medium">
                              Updated
                            </th>
                            <th className="px-6 py-3 text-left font-medium"></th>
                          </tr>
                        </thead>

                        <tbody className="bg-white">
                          {brands?.length > 0 &&
                            brands
                              .filter((item) => item.status !== 0)
                              .map((items, index) => {
                                return (
                                  <tr key={index}>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                      <input
                                        className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                        type="checkbox"
                                      />
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                      <div className="text-sm leading-5 text-gray-900">
                                        {items.name}
                                      </div>
                                    </td>
                                    {/* <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                      <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                          <ItemsImg
                                            images={JSON.parse(items?.images)}
                                          />
                                        </div>
                                        <div className="ml-4">
                                          <div className="text-sm leading-5 font-medium text-gray-900"></div>
                                        </div>
                                      </div>
                                    </td> */}
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                      <div className="text-sm leading-5 text-gray-900">
                                        {items.slug}
                                      </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        {items.status === 1 && "success"}
                                      </span>
                                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                        {items.status === 2 && "fail"}
                                      </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                      {new Date(
                                        items.createdAt
                                      ).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                      {new Date(
                                        items.updatedAt
                                      ).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                      <button
                                        onClick={() => {
                                          setModalEdit(true);
                                          setDataBrandEdit(items);
                                        }}
                                        className="text-indigo-600 px-2   hover:text-indigo-900 focus:outline-none focus:underline"
                                      >
                                        Show
                                      </button>
                                      <button
                                        onClick={() => submitStatus(items)}
                                        className="text-indigo-600  px-2 hover:text-indigo-900 focus:outline-none focus:underline"
                                      >
                                        delete
                                      </button>
                                    </td>
                                  </tr>
                                );
                              })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <Insert modal={modal} setModal={setModal} />
                </div>
                <Edit
                  modalEdit={modalEdit}
                  setModalEdit={setModalEdit}
                  dataBrandEdit={dataBrandEdit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBrand;
