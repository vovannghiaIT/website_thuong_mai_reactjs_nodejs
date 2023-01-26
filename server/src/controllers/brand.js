import * as services from "../services/brand";

export const getBrand = async (req, res) => {
  try {
    const response = await services.getBrandsService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at brand controller: " + error,
    });
  }
};
export const insertBrand = async (req, res) => {
  try {
    const response = await services.insertBrandService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at Brand controller: " + error,
    });
  }
};

export const updateBrands = async (req, res) => {
  try {
    const response = await services.updateBrandsService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at brand controller: " + error,
    });
  }
};

export const deleteBrands = async (req, res) => {
  try {
    const response = await services.DeleteBrandsService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at Brand controller: " + error,
    });
  }
};
