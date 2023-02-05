"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.hasOne(models.Orderdetail, { foreignKey: "orderId", as: "orders" });
      Order.belongsTo(models.User, {
        foreignKey: "userId",
        targetKey: "id",
        as: "users",
      });
    }
  }
  Order.init(
    {
      code: DataTypes.STRING,
      userId: DataTypes.STRING,
      exportdate: DataTypes.STRING,
      deliveryaddress: DataTypes.STRING,
      deliveryname: DataTypes.STRING,
      deliveryphone: DataTypes.STRING,
      deliveryemail: DataTypes.STRING,
      value: DataTypes.STRING,
      updateby: DataTypes.STRING,
      createby: DataTypes.STRING,
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
