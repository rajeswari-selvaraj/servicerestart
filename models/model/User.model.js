const { DataTypes } = require("sequelize");
const sequelize = require("../../configuration/dbconfig");

const User = sequelize.define('user',{
    id:{
        type:DataTypes.BIGINT,
        primaryKey:true,
        unique:true,
        autoIncrement:true,
        allowNull:false
    },
    Name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Mail:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    MobileNumber:{
        type:DataTypes.BIGINT,
        allowNull:false,
        unique:true
    }
},{tableName:'Users'});

module.exports = User;