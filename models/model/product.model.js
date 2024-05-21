const {DataTypes} = require('sequelize');
const sequelize = require("../../configuration/dbconfig");
const category = require("../model/category.model");

const product =  sequelize.define('Product',{
   id:{
      type:DataTypes.BIGINT,      
      primaryKey:true,
      allowNull:false,
      autoIncrement:true
   },
   product_name:{
      type:DataTypes.STRING,
      allowNull:false
   },
   product_disc:{
      type:DataTypes.STRING,
      allowNull:false
   },
   price:{
      type:DataTypes.DOUBLE,
      allowNull:false
   },
   qty:{
      type:DataTypes.INTEGER,
      allowNull:false
   },
   isAvailabe:{
      type:DataTypes.TINYINT,
      allowNull:false,
      defaultValue:1
   },
   // createdDate:{
   //    type: DataTypes.DATE,
   //    defaultValue: DataTypes.NOW,
   //    allowNull:false
   // }
   

},{tableName: 'product'}
);

category.hasMany(product);
product.belongsTo(category);

module.exports = product;