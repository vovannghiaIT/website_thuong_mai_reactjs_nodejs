import * as services from "../services/order";

export const insertOrder = async (req, res) => {
  try {
    // console.log(req.body);
    const response = await services.insertOrderService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at order controller: " + error,
    });
  }
};

export const getOrder = async (req, res) => {
  try {
    const response = await services.getOrderService();

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at order controller: " + error,
    });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const response = await services.DeleteOrderSerivce(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at order controller: " + error,
    });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const response = await services.updateOrdersSerivce(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at order controller: " + error,
    });
  }
};
