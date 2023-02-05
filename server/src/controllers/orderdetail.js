import * as services from "../services/orderdetail";

export const insertOrderDetail = async (req, res) => {
  try {
    // console.log(req.body);
    const response = await services.insertOrderDetailService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at orderDetail controller: " + error,
    });
  }
};

export const getOrderDetail = async (req, res) => {
  try {
    const response = await services.getOrderDetailService();

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at orderDetail controller: " + error,
    });
  }
};

export const deleteOrderDetail = async (req, res) => {
  try {
    const response = await services.DeleteOrderDetailSerivce(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at orderDetail controller: " + error,
    });
  }
};

export const updateOrderDetail = async (req, res) => {
  try {
    const response = await services.updateOrderDetailSerivce(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at orderDetail controller: " + error,
    });
  }
};
