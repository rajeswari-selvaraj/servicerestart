const express = require("express");

const sequelize = require("./configuration/dbconfig");
const product_routes = require("./roues/product.routes");
const category_routes = require("./roues/category.routes");
const user_routes = require("./roues/user.routes");
const card_router = require("./roues/card.routes");

const { errorHandle } = require("./utils/ErrorFiles/errorHandler");

const app = express();
app.use(express.json());
app.use(category_routes);
app.use(product_routes);
app.use(user_routes);
app.use(card_router)


sequelize
  // .sync({alter:true})
  .sync()
  .then((result) => {
    console.log("db connected");
  })
  .catch((error) => {
    errorHandle(error);
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

app.get("/", (req, res) => {
  res.send("<h2>Hello this is my first app</h2>");
});

app.listen(5000, () => {
  console.log("server listing port 5000");
});
