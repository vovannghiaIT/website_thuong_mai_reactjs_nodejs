import axiosConfig from "../axiosConfig";

export const apiInsertOrders = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: "/api/v1/order/insert",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });