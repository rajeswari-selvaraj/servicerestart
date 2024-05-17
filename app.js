const express = require('express');

 const sequelize = require("./configuration/dbconfig");
const product_routes = require("./roues/product.routes");
const category_routes = require("./roues/category.routes");
const category = require('./models/model/category.model');
const product = require('./models/model/product.model');

const app = express();
app.use(express.json());
app.use (product_routes);
app.use (category_routes);

category.hasMany(product);
product.belongsTo(category);

sequelize.sync().then((result)=>{
    //console.log("result");
 }).catch((error)=>{
    console.log(error);
 });


// dbconnection.authenticate().then(()=>{
//     console.log("db connected");
// }).catch((error)=>{
//     console.log(error);
// });

//console.log(process.env.DATABASE_HOST);
// dbconnection.authenticate().then(()=>{
//     console.log("db connected sucessfully");
// }).catch((error)=>{
//     console.log("db error:",error)
// })

app.get('/',(req,res)=>{
    res.send("<h2>Hello this is my first app</h2>")
});

app.listen(5000,()=>{
    console.log("server listing port 5000");
});