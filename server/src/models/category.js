"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasOne(models.Product, {
        foreignKey: "categoryId",
        as: "categories",
      });
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
      code: DataTypes.STRING,
      slug: DataTypes.STRING,
      images: DataTypes.JSON,
      parentid: DataTypes.STRING,
      value: DataTypes.STRING,
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
