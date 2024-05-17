const { DataTypes } = require('sequelize');
const sequelize = require('../../configuration/dbconfig');

const category = sequelize.define('category',{
    id:{
        type:DataTypes.BIGINT,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    category_desc:{
        type:DataTypes.STRING,
        allowNull:false
    }

},{tableName:'categories'});

module.exports = category;