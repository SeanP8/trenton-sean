var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

let Burger = sequelize.define(
  "practice-burger",
  {
    burger_name: Sequelize.STRING,
    devoured: Sequelize.STRING,
    createdAt: Sequelize.INTEGER,
    updatedAt: Sequelize.INTEGER
  },
  {
    freezeTableName: true
  }
);

Burger.sync();
module.exports = Burger;
