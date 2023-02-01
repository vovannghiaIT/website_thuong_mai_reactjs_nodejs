import * as services from "../services/category";

export const getCategories = async (req, res) => {
  try {
    const response = await services.getCategoriesService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at category controller: " + error,
    });
  }
};
export const insertCategories = async (req, res) => {
  try {
    const response = await services.insertCategoriesService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at category controller: " + error,
    });
  }
};
export const updateCategories = async (req, res) => {
  try {
    const response = await services.updateCategoriesService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at category controller: " + error,
    });
  }
};
// export const getIdCategories = async (req, res) => {
//   try {
//     const response = await services.GetIdCategoriesService(req.body);
//     return res.status(200).json(response);
//   } catch (error) {
//     return res.status(500).json({
//       err: -1,
//       msg: "Failed at category controller: " + error,
//     });
//   }
// };
export const deleteCategories = async (req, res) => {
  try {
    const response = await services.DeleteCategoriesService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at category controller: " + error,
    });
  }
};
