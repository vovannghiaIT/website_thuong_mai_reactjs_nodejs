import express from "express";

import * as userController from "../controllers/user";

const router = express.Router();

router.get("/all", userController.getUserAll);
router.delete("/delete", userController.deleteUser);
router.put("/updateNew", userController.UpdateUserNew);
router.put("/updateOld", userController.UpdateUserOld);

export default router;
