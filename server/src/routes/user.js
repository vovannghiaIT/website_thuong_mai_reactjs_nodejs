import express from "express";
import verifyToken from "../middlewares/verifyToken";
import * as userController from "../controllers/user";

const router = express.Router();

router.get("/all", userController.getUserAll);
router.delete("/delete", userController.deleteUser);
router.put("/update", userController.UpdateUser);
router.use(verifyToken);
router.get("/get-current", userController.getCurrent);

export default router;
