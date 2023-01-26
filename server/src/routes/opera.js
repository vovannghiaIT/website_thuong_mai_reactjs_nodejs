import express from "express";
import * as operaController from "../controllers/opera";

const router = express.Router();

router.get("/all", operaController.getOpera);
router.post("/insert", operaController.insertOpera);
router.put("/update", operaController.updateOperas);
router.delete("/delete", operaController.deleteOperas   );

export default router;
