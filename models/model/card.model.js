const { DataTypes } = require("sequelize");
const sequelize = require("../../configuration/dbconfig");
const User = require("../model/User.model");

const card = sequelize.define(
  "card",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    cardStatus: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Pending",
    },
  },
  { tableName: "cards" }
);

card.belongsTo(User);

module.exports = card;
