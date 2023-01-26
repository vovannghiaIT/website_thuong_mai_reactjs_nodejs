"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Product.belongsTo(models.Category, {
        foreignKey: "categoryId",
        targetKey: "id",
        as: "categories",
      });
      Product.belongsTo(models.Brand, {
        foreignKey: "brandId",
        targetKey: "id",
        as: "brands",
      });
      Product.belongsTo(models.Opera, {
        foreignKey: "operaId",
        targetKey: "id",
        as: "operas",
      });

      Product.hasOne(models.Orderdetail, {
        foreignKey: "productId",
        as: "products",
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      operaId: DataTypes.INTEGER,
      brandId: DataTypes.INTEGER,
      images: DataTypes.JSON,
      star: DataTypes.STRING,
      slug: DataTypes.STRING,
      description: DataTypes.JSON,
      number: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
      pricesale: DataTypes.FLOAT,
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
