import React, { useEffect, useState } from "react";
import icons from "../../ultils/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { InFoUser, ItemsImg } from "../../components";
import avatar from "../../assets/avatar.png";
import bcrypt from "bcryptjs";
import { toast } from "react-toastify";
import { apiUpdateUsers } from "../../services";
import * as action from "../../store/actions";

const ReSetPassword = () => {
  const { currentData } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(action.getCurrent());
  };
  const navigate = useNavigate();
  const { AiOutlineHome, AiFillEyeInvisible, AiFillEye } = icons;
  const [checkPassword, setCheckPassword] = useState();
  const [dataPasswordNew, setdataPasswordNew] = useState();
  const [dataPasswordNewTwo, setdataPasswordNewTwo] = useState();
  const [ViewcheckOld, setViewcheckOld] = useState(false);
  const [ViewcheckNew, setViewcheckNew] = useState(false);
  const [ViewcheckNewRepeat, setViewcheckNewRepeat] = useState(false);

  const [payload, setPayload] = useState(() => {
    const initData = {
      id: currentData?.id,
      firstName: currentData?.firstName || "",
      lastName: currentData?.lastName || "",
      address: currentData?.address || "",
      password: "",
      email: currentData?.email || "",
      avatar: currentData?.avatar || null,
      phone: currentData?.phone || "",
      gender: 0,
      roles: currentData?.roles || 0,
      status: 1,
    };
    return initData;
  });
  // useEffect(() => {
  //   setPayload({
  //     id: currentData?.id,
  //     firstName: currentData?.firstName || "",
  //     lastName: currentData?.lastName || "",
  //     address: currentData?.address || "",
  //     password: "",
  //     email: currentData?.email || "",
  //     avatar: JSON.parse(currentData?.avatar) || null,
  //     phone: currentData?.phone || "",
  //     gender: 0,
  //     roles: currentData?.roles || 0,
  //     status: 1,
  //   });
  // }, [currentData]);

  const handleResetPassword = async () => {
    if (
      !checkPassword ||
      checkPassword === "" ||
      dataPasswordNew === "" ||
      !dataPasswordNew ||
      dataPasswordNewTwo === "" ||
      !dataPasswordNewTwo
    ) {
      return toast.warn("Vui l??ng nh???p ????? th??ng tin", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
    let isConnect = bcrypt.compareSync(checkPassword, currentData?.password);
    if (isConnect === true) {
      if (dataPasswordNew === dataPasswordNewTwo) {
        if (dataPasswordNew.length > 6) {
          let pass = dataPasswordNew;

          payload.password = pass;
          await apiUpdateUsers(payload);
          toast.success("?????i m???t kh???u th??nh c??ng", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
          setCheckPassword();
          setdataPasswordNew();
          setdataPasswordNewTwo();
          fetchData();
          setTimeout(function () {
            navigate("/");
          }, 1100);
        } else {
          toast.warn("Vui l??ng nh???p c?? h??n 6 k?? t???!", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      } else {
        toast.warn("Vui l??ng nh???p m???t kh???u m???i tr??ng nhau!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      }
    } else {
      toast.warn("M???t kh???u c?? ch??a ch??nh x??c!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };
  return (
    <div className="bg-[#f1f1f1] w-full">
      <div className="py-1 shadow-lg ">
        <div className="w-[80%] mx-auto text-[13px] flex items-center gap-1">
          <AiOutlineHome color="red" />
          Trang ch??? / T??i kho???n
        </div>
      </div>
      <div className="w-[80%] md:max-lg:w-[96%]  sm:max-md:w-[96%]   mx-auto items-center mt-5 bg-[#f1f1f1]">
        <div className="flex justify-between  sm:max-md:flex-col   sm:max-md:gap-2  gap-5">
          <div className="flex flex-col gap-5 w-[70%] items-start  sm:max-md:gap-2 sm:max-md:w-[96%]">
            <div className="flex gap-5  sm:max-md:gap-2 justify-center items-center w-full">
              <div className="w-1/2 p-5 bg-white  flex flex-col gap-2 justify-center items-center relative shadow-10% rounded-xl">
                <img
                  src="./img/checklist.png"
                  alt="checklist"
                  className="object-cover w-7 h-7 "
                />
                <span className="font-semibold text-[14px]  sm:max-md:text-[11px]">
                  L???ch s??? ????n h??ng
                </span>
                <span className="absolute top-[40%] right-[45%] text-center bg-red-600 rounded-xl w-[20px] h-[20px] leading-[20px] text-white text-[9px] ">
                  0
                </span>
              </div>
              <div className="w-1/2 p-5 bg-white  flex flex-col gap-2 justify-center items-center relative shadow-10% rounded-xl">
                <span className="w-8 h-8">
                  {currentData?.avatar && currentData?.avatar !== "0" ? (
                    <ItemsImg images={JSON.parse(currentData?.avatar)} />
                  ) : (
                    <img src={avatar} alt="avatar" />
                  )}
                </span>
                <span className="font-semibold text-[14px]  sm:max-md:text-[11px]">
                  {" "}
                  Xin ch??o {currentData?.firstName + currentData?.lastName}
                </span>
              </div>
            </div>
            <div className="w-full p-5 mb-5 bg-white  flex flex-col gap-4  sm:max-md:gap-2 justify-start items-start relative shadow-10% rounded-xl">
              <h1 className="capitalize text-red-600 font-semibold">
                ?????i m???t kh???u
              </h1>
              <p className="text-gray-600 text-[15px]  sm:max-md:text-[13px]">
                ????? ?????m b???o t??nh b???o m???t vui l??ng ?????t m???t kh???u v???i ??t nh???t 8 k??
                t???
              </p>
              <div className="flex  flex-col gap-2 w-full relative">
                <label className="text-gray-600 text-[15px]">
                  M???t kh???u hi???n t???i <span className="text-red-500">*</span>
                </label>
                <input
                  type={`${ViewcheckOld ? "text" : "password"}`}
                  className="border-[0.5px] p-1 outline-red-500 outline-[0.5px]  rounded-md "
                  onChange={(e) => setCheckPassword(e.target.value)}
                />
                <span
                  className="absolute  top-[60%]  right-2 cursor-pointer"
                  onClick={() => setViewcheckOld(!ViewcheckOld)}
                >
                  {ViewcheckOld && <AiFillEye size={20} />}
                  {!ViewcheckOld && <AiFillEyeInvisible size={20} />}
                </span>
              </div>
              <div className="flex  flex-col gap-2 w-full relative">
                <label className="text-gray-600 text-[15px]">
                  M???t kh???u m???i <span className="text-red-500">*</span>
                </label>
                <input
                  type={`${ViewcheckNew ? "text" : "password"}`}
                  onChange={(e) => setdataPasswordNew(e.target.value)}
                  className="border-[0.5px] p-1 outline-red-500 outline-[0.5px]  rounded-md"
                />
                <span
                  className="absolute  top-[60%]  right-2 cursor-pointer"
                  onClick={() => setViewcheckNew(!ViewcheckNew)}
                >
                  {ViewcheckNew && <AiFillEye size={20} />}
                  {!ViewcheckNew && <AiFillEyeInvisible size={20} />}
                </span>
              </div>
              <div className="flex  flex-col gap-2 w-full relative">
                <label className="text-gray-600 text-[15px]">
                  Nh???p l???i m???t kh???u m???i <span className="text-red-500">*</span>
                </label>
                <input
                  type={`${ViewcheckNewRepeat ? "text" : "password"}`}
                  onChange={(e) => setdataPasswordNewTwo(e.target.value)}
                  className="border-[0.5px] p-1 outline-red-500 outline-[0.5px]  rounded-md"
                />
                <span
                  className="absolute  top-[60%]  right-2 cursor-pointer"
                  onClick={() => setViewcheckNewRepeat(!ViewcheckNewRepeat)}
                >
                  {ViewcheckNewRepeat && <AiFillEye size={20} />}
                  {!ViewcheckNewRepeat && <AiFillEyeInvisible size={20} />}
                </span>
              </div>

              <button
                onClick={() => handleResetPassword()}
                className="text-white bg-red-600 rounded-md px-2 py-1"
              >
                ?????i m???t kh???u
              </button>
            </div>
          </div>
          <div className="w-[30%]  sm:max-md:w-[96%]">
            <InFoUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReSetPassword;
