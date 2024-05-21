const user = require("../model/User.model");
const card = require("../model/card.model");
const product = require("../model/product.model");
const cardproduct = require("../model/cardproduct.model");

exports.getcardproductDetails = () => {
  return cardproduct.findAll({include:[product,card]});
};

exports.addcardproductDetails = (cardproductData) => {
  return cardproduct.create(cardproductData);
};

exports.getcardproductDetailsById = (cardproductId) => {
  return cardproduct.findByPk(cardproductId,{include:[product,card]});
};

exports.updatecardproductDetails = (cardproductData, cardproductId) => {
  return cardproduct.update(cardproductData, { where: { id: cardproductId } });
};

exports.deletecardproductDetails = (cardproductId) => {
  return cardproduct.destroy({ where: { id: cardproductId } });
};
