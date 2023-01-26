"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      code: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.STRING,
      },
      exportdate: {
        type: Sequelize.STRING,
      },
      deliveryaddress: {
        type: Sequelize.STRING,
      },
      deliveryname: {
        type: Sequelize.STRING,
      },
      deliveryphone: {
        type: Sequelize.STRING,
      },
      deliveryemail: {
        type: Sequelize.STRING,
      },
      value: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Orders");
  },
};
