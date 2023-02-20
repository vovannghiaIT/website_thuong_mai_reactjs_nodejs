import * as services from "../services/user";

export const getCurrent = async (req, res) => {
  const { id } = req.user;
  try {
    const response = await services.getOne(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at user controller: " + error,
    });
  }
};
export const getUserAll = async (req, res) => {
  // const { id } = req.user;
  try {
    const response = await services.getUserAllService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at user controller: " + error,
    });
  }
};
export const UpdateUserNew = async (req, res) => {
  // const { id } = req.user;
  try {
    const response = await services.updateUserServiceNew(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at user controller: " + error,
    });
  }
};
export const UpdateUserOld = async (req, res) => {
  // const { id } = req.user;
  try {
    const response = await services.updateUserServiceOld(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at user controller: " + error,
    });
  }
};
export const deleteUser = async (req, res) => {
  // const { id } = req.user;
  try {
    const response = await services.DeleteUserService(req.body);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Failed at user controller: " + error,
    });
  }
};
