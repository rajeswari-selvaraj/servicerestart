const { DataTypes } = require("sequelize");
const sequelize = require("../../configuration/dbconfig");
const card = require("./card.model");
const product = require("./product.model");


const cardproduct = sequelize.define('cardproduct',{
    id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    }

},{tableName:"cardproducts"});

card.belongsToMany(product,{through:cardproduct});
product.belongsToMany(card,{through:cardproduct});

module.exports=cardproduct;