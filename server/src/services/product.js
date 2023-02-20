import db from "../models";

// GET ALL PRODUCT
export const getProductService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Product.findAll({
        raw: true,
        nest: true,
        include: [
          { model: db.Category, as: "categories" },
          { model: db.Brand, as: "brands" },
          { model: db.Opera, as: "operas" },
        ],
        order: [["createdAt", "DESC"]],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get product service.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
//GET PRODUCT PAGINATE
export const getProductLimitService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Product.findAll({
        raw: true,
        nest: true,
        limit: +5,
        include: [
          { model: db.Category, as: "categories" },
          { model: db.Brand, as: "brands" },
          { model: db.Opera, as: "operas" },
        ],
        order: [["createdAt", "DESC"]],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get product service.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
//GET Detail product with slug
export const getProductDetailSlugService = (query) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Product.findOne({
        raw: true,
        where: { slug: query.slug },
        nest: true,
        include: [
          { model: db.Category, as: "categories" },
          { model: db.Brand, as: "brands" },
          { model: db.Opera, as: "operas" },
        ],
        order: [["createdAt", "DESC"]],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get product detail service.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

//Get product width category
// export const getProductCategoryService = (body) =>
//   new Promise(async (resolve, reject) => {
//     try {
//       // console.log(query.);
//       const response = await db.Product.findAll({
//         raw: true,
//         where: { categoryId: body.categoryId },
//         nest: true,
//         include: [
//           { model: db.Category, as: "categories" },
//           { model: db.Brand, as: "brands" },
//           { model: db.Opera, as: "operas" },
//         ],
//         order: [["createdAt", "DESC"]],
//       });
//       resolve({
//         err: response ? 0 : 1,
//         msg: response ? "OK" : "Failed to get product category service.",
//         response,
//       });
//     } catch (error) {
//       reject(error);
//     }
//   });

// add products
export const insertProductsSerivce = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Product.create({
        name: body.name,
        categoryId: body.categoryId,
        brandId: body.brandId,
        operaId: body.operaId,
        images: body.images,
        star: body.star,
        slug: body.slug,
        description: body.description,
        number: body.number,
        price: body.price,
        pricesale: body.pricesale,
        status: body.status,
      });

      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to post products.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
//update

export const updateProductsSerivce = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      // console.log(body.id);
      const response = await db.Product.update(
        {
          name: body.name,
          categoryId: body.categoryId,
          images: body.images,
          star: body.star,
          slug: body.slug,
          description: body.description,
          number: body.number,
          price: body.price,
          pricesale: body.pricesale,
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
        msg: response ? "OK" : "Failed to put product.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
//delete
export const DeleteProductSerivce = (body) =>
  new Promise(async (resolve, reject) => {
    try {
      //console.log(body);
      const response = await db.Product.destroy({
        where: {
          id: body.id,
        },
        raw: true,
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Failed to get id products.",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
