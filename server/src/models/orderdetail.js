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

      Orderdetail.belongsTo(models.Order, {
        foreignKey: "orderId",
        targetKey: "id",
        as: "orders",
      });
    }
  }
  Orderdetail.init(
    {
      name: DataTypes.STRING,
      orderId: DataTypes.STRING,
      productId: DataTypes.INTEGER,
      images: DataTypes.JSON,
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
