const { DataTypes } = require("sequelize");
const sequelize = require("../../configuration/dbconfig");
// const card = require("./card.model");

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
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    isEmailVerified:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    },
    isMobVerified:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
},{tableName:'Users'});

// User.hasOne(card);

module.exports = User;