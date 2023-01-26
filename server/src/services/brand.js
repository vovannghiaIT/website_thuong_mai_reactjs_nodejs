import db from "../models";

// GET ALL Brand
export const getBrandsService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Brand.findAll({
        raw: true,
        order: [["createdAt", "DESC"]],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get Brand.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// post brand
export const insertBrandService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Brand.create({
        name: body.name,
        slug: body.slug,
        images: body.images,
        status: body.status,
      });

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to post brand.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
//
export const updateBrandsService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      // console.log(body.id);
      const response = await db.Brand.update(
        {
          name: body.name,
          slug: body.slug,
          images: body.images,
          status: body.status,
        },
        {
          where: {
            id: body.id,
          },
        }
      );

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to put Brand.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

//
export const DeleteBrandsService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      //console.log(body);
      const response = await db.Brand.destroy({
        where: {
          id: body.id,
        },
        raw: true,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get id Brand.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
