import db from "../models";

// GET ALL CATEGORY
export const getCategoriesService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findAll({
        raw: true,
        order: [["createdAt", "DESC"]],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get categories.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

// post category
export const insertCategoriesService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.create({
        name: body.name,
        code: body.code,
        slug: body.slug,
        parentid: body.parentid,
        value: body.value,
        status: body.status,
        images: body.images,
      });

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to post categories.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
export const updateCategoriesService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      // console.log(body.id);
      const response = await db.Category.update(
        {
          name: body.name,
          code: body.code,
          slug: body.slug,
          parentid: body.parentid,
          value: body.value,
          status: body.status,
          images: body.images,
        },
        {
          where: {
            id: body.id,
          },
        }
      );

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to put categories.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
// export const GetIdCategoriesService = (body) =>
//   new Promise(async (resolve, reject) => {
//     try {
//       //console.log(body);
//       const response = await db.Category.findOne({
//         where: {
//           id: body.id,
//         },
//         raw: true,
//       });

//       resolve({
//         err: response ? 0 : 1,
//         msg: response ? "OK" : "Failed to get id categories.",
//         response,
//       });
//     } catch (error) {
//       reject(error);
//     }
//   });
export const DeleteCategoriesService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      //console.log(body);
      const response = await db.Category.destroy({
        where: {
          id: body.id,
        },
        raw: true,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get id categories.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
