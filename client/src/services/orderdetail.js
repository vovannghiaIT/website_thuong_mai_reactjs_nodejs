import axiosConfig from "../axiosConfig";

export const apiInsertOrderDetails = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: "/api/v1/orderDetail/insert",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
