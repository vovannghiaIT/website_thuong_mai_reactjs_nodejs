import db from "../models";
//post order
export const insertOrderDetailService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Orderdetail.create({
        name: body.name,
        orderId: body.orderId,
        productId: body.productId,
        images: body.images,
        price: body.price,
        quantity: body.quantity,
        amount: body.amount,
        status: body.status,
      });

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to post Orderdetail.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getOrderDetailService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Orderdetail.findAll({
        raw: true,
        nest: true,
        include: [{ model: db.Order, as: "orders" }],
        order: [["createdAt", "DESC"]],
      });

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get Orderdetail service.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

//update

export const updateOrderDetailSerivce = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      // console.log(body.id);
      const response = await db.Orderdetail.update(
        {
          name: body.name,
          orderId: body.orderId,
          productId: body.productId,
          images: body.images,
          price: body.price,
          quantity: body.quantity,
          amount: body.amount,
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
        msg: response ? "OK" : "Failed to put Orderdetail.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
//delete
export const DeleteOrderDetailSerivce = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      //console.log(body);
      const response = await db.Orderdetail.destroy({
        where: {
          id: body.id,
        },
        raw: true,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get id Orderdetail.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
