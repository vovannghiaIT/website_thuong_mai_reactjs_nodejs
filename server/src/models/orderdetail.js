"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orderdetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Orderdetail.belongsTo(models.Product, {
        foreignKey: "productId",
        targetKey: "id",
        as: "products",
      });

      Orderdetail.belongsTo(models.Product, {
        foreignKey: "orderId",
        targetKey: "id",
        as: "orders",
      });
    }
  }
  Orderdetail.init(
    {
      name: DataTypes.STRING,
      orderId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Orderdetail",
    }
  );
  return Orderdetail;
};
