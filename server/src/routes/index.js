import authRouter from "./auth";
import userRouter from "./user";
import categoryRouter from "./category";
import productRouter from "./product";
import brandRouter from "./brand";
import operaRouter from "./opera";

const initRoutes = (app) => {
  app.use("/api/v1/auth", authRouter);
  app.use("/api/v1/user", userRouter);
  app.use("/api/v1/category", categoryRouter);
  app.use("/api/v1/product", productRouter);
  app.use("/api/v1/brand", brandRouter);
  app.use("/api/v1/opera", operaRouter);

  return app.use("/", (req, res) => {
    res.send("sever on...");
  });
};

export default initRoutes;
