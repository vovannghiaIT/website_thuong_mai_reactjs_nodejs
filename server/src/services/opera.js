import db from "../models";

// GET ALL Opera
export const getOperaService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Opera.findAll({
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

// post opera
export const insertOperaService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Opera.create({
        name: body.name,
        slug: body.slug,
        images: body.images,
        status: body.status,
      });

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to post Opera.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const updateOperasService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      // console.log(body.id);
      const response = await db.Opera.update(
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
        msg: response ? "OK" : "Failed to put Opera.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

//
export const DeleteOperasService = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      //console.log(body);
      const response = await db.Opera.destroy({
        where: {
          id: body.id,
        },
        raw: true,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get id Opera.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
