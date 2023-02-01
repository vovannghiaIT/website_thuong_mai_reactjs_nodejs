import express from "express";
import * as searchController from "../controllers/search";

const router = express.Router();

router.get("/:key", searchController.getSearchProduct);
export default router;
