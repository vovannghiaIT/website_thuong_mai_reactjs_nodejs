import * as services from "../services/product";

export const getProduct = async (req, res) => {
  try {
    const response = await services.getProductService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at product controller: " + error,
    });
  }
};
export const getProductLimit = async (req, res) => {
  try {
    const response = await services.getProductLimitService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at product controller: " + error,
    });
  }
};
export const getDetailProduct = async (req, res) => {
  try {
    // const { slug, ...query } = req.query;
    // console.log(req.query);
    const response = await services.getProductDetailSlugService(req.query);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at productDetail controller: " + error,
    });
  }
};
// export const getProductCategory = async (req, res) => {
//   try {
//     // const { slug, ...query } = req.query;
//     console.log(req.body);
//     const response = await services.getProductCategoryService(req.body);
//     return res.status(200).json(response);
//   } catch (error) {
//     return res.status(500).json({
//       err: -1,
//       msg: "Failed at product category controller: " + error,
//     });
//   }
// };
export const insertProduct = async (req, res) => {
  try {
    const response = await services.insertProductsSerivce(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at product controller: " + error,
    });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const response = await services.DeleteProductSerivce(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at product controller: " + error,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const response = await services.updateProductsSerivce(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at product controller: " + error,
    });
  }
};
