import express from "express";
import * as productController from "../controllers/product";

const router = express.Router();

router.get("/all", productController.getProduct);
router.get("/detail/:slug", productController.getDetailProduct);
// router.get("/productcategory/:categoryId", productController.getProductCategory);
router.post("/insert", productController.insertProduct);
router.put("/update", productController.updateProduct);
router.delete("/delete", productController.deleteProduct);

export default router;
