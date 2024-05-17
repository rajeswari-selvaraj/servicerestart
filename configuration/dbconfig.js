const {Sequelize} = require ('sequelize');

const mysql = require('mysql2');

require("dotenv").config();
const db_name = process.env.DATABASE_NAME;
const db_user = process.env.DATABASE_USER;
const db_pass = process.env.DATABASE_PASS
const db_host = process.env.DATABASE_HOST;
const db_port = process.env.DATABASE_PORT;

const sequelize = new Sequelize(db_name,db_user,db_pass,{
    dialect: 'mysql',
    host: db_host,
    port: db_port
});

module.exports = sequelize;

// const mysql = require('mysql2');
// const { Sequelize } = require("sequelize");
// // const mysql = require('mysql2/promise');
// var db;
// try{
//      db = mysql.createPool({
//         host:db_host,
//         port:db_port,
//         user:db_user,
//         password:db_pass,
//         database:db_name
//     });
// }catch(err){
//     console.log("connection error:",err)
// }


// module.exports = db ;
// module.exports = db.promise() ;