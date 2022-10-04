"use strict";

const { v4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("tb_categorias", [
      { id: v4(), title: "Lampâdas", imageData: "lampadas.svg" },
      { id: v4(), title: "Pilhas e baterias", imageData: "baterias.svg" },
      { id: v4(), title: "Papéis e Papelão", imageData: "papeis-papelao.svg" },
      { id: v4(), title: "Resíduos Eletrônicos", imageData: "eletronicos.svg" },
      { id: v4(), title: "Resíduos Orgânicos", imageData: "organicos.svg" },
      { id: v4(), title: "Oléos de cozinha", imageData: "oleo.svg" },
    ]);
  },
};
