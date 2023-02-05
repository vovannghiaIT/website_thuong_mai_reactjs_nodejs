import db from "../models";
//post order
export const insertOrderService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Order.create({
        id: body.id,
        code: body.code,
        userId: body.userId,
        exportdate: body.exportdate,
        deliveryaddress: body.deliveryaddress,
        deliveryname: body.deliveryname,
        deliveryphone: body.deliveryphone,
        deliveryemail: body.deliveryemail,
        value: body.value,
        status: body.status,
      });

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to post Order.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getOrderService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Order.findAll({
        raw: true,
        nest: true,
        include: [{ model: db.User, as: "users" }],
        order: [["createdAt", "DESC"]],
      });

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get order service.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

//update

export const updateOrdersSerivce = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      // console.log(body.id);
      const response = await db.Order.update(
        {
          code: body.code,
          userId: body.userId,
          exportdate: body.exportdate,
          deliveryaddress: body.deliveryaddress,
          deliveryname: body.deliveryname,
          deliveryphone: body.deliveryphone,
          deliveryemail: body.deliveryemail,
          value: body.value,
          status: body.status,
        },
        {
          where: {
            id: body.id,
          },
        }
      );

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to put Order.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
//delete
export const DeleteOrderSerivce = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      //console.log(body);
      const response = await db.Order.destroy({
        where: {
          id: body.id,
        },
        raw: true,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get id order.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
