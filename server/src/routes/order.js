import express from "express";
import * as orderController from "../controllers/order";

const router = express.Router();

router.get("/all", orderController.getOrder);
router.post("/insert", orderController.insertOrder);
router.put("/update", orderController.updateOrder);
router.delete("/delete", orderController.deleteOrder);

export default router;
