import express from "express";
import * as orderDetailController from "../controllers/orderdetail";

const router = express.Router();

router.get("/all", orderDetailController.getOrderDetail);
router.post("/insert", orderDetailController.insertOrderDetail);
router.put("/update", orderDetailController.updateOrderDetail);
router.delete("/delete", orderDetailController.deleteOrderDetail);

export default router;
