import db from "../models";

const { Op } = require("sequelize");
export const getSearchService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      //   console.log(body.key);
      const response = await db.Product.findAll({
        where: {
          name: {
            [Op.substring]: body.key,
          },
        },
        order: [["createdAt", "DESC"]],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get search service.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
