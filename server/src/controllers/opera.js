import * as services from "../services/opera";

export const getOpera = async (req, res) => {
  try {
    const response = await services.getOperaService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at opera controller: " + error,
    });
  }
};
export const insertOpera = async (req, res) => {
  try {
    const response = await services.insertOperaService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at opera controller: " + error,
    });
  }
};

export const updateOperas = async (req, res) => {
  try {
    const response = await services.updateOperasService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at opera controller: " + error,
    });
  }
};

export const deleteOperas = async (req, res) => {
  try {
    const response = await services.DeleteOperasService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at opera controller: " + error,
    });
  }
};
