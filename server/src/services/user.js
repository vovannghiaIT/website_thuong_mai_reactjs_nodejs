import db from "../models";
import bcrypt from "bcryptjs";
const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));
// GET CURRENT
export const getOne = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { id },
        raw: true,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get provinces.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

//GET ALL
export const getUserAllService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findAll({
        raw: true,
        order: [["createdAt", "DESC"]],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get user.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
//Update old
export const updateUserServiceOld = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      // console.log(body.id);
      const response = await db.User.update(
        {
          firstName: body.firstName,
          lastName: body.lastName,
          phone: body.phone,
          password: body.password,
          email: body.email,
          address: body.address,
          roles: body.roles,
          avatar: body.avatar,
          status: body.status,
          orders: body.orders,
        },
        {
          where: {
            id: body.id,
          },
        }
      );

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to put user.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
//GET Update new
export const updateUserServiceNew = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      // console.log(body.id);
      const response = await db.User.update(
        {
          firstName: body.firstName,
          lastName: body.lastName,
          phone: body.phone,
          password: hashPassword(body.password),
          email: body.email,
          address: body.address,
          roles: body.roles,
          avatar: body.avatar,
          status: body.status,
          orders: body.orders,
        },
        {
          where: {
            id: body.id,
          },
        }
      );

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to put user.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const DeleteUserService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      //console.log(body);
      const response = await db.User.destroy({
        where: {
          id: body.id,
        },
        raw: true,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get id user.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
