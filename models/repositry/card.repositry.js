const user = require("../model/User.model");
const card = require("../model/card.model");
const product = require("../model/product.model");
const cardproduct = require("../model/cardproduct.model");

exports.getcardDetails = () => {
  return card.findAll({include:[product,user]});
};

exports.addcardDetails = (cardData) => {
  return card.create(cardData);
};

exports.getcardDetailsById = (cardId) => {
  return card.findByPk(cardId,{include:[product,user]});
};

exports.updatecardDetails = (cardData, cardId) => {
  return card.update(cardData, { where: { id: cardId } });
};

exports.deletecardDetails = (cardId) => {
  return card.destroy({ where: { id: cardId } });
};
