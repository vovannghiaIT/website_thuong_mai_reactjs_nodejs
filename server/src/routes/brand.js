import express from "express";
import * as brandController from "../controllers/brand";

const router = express.Router();

router.get("/all", brandController.getBrand);
router.post("/insert", brandController.insertBrand);
router.put("/update", brandController.updateBrands);
router.delete("/delete", brandController.deleteBrands);

export default router;
