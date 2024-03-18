"use strict";

const { v4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("tb_categorias", [
      { id: v4(), title: "Focos de Denge", imageData: "mosquito.svg" },
    ]);
  },
};
