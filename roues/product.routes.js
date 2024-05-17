const express = require('express');
const routes = express.Router();
const {GetAllProducts,AddProducts,getProductById,updateProduct,deleteProduct} = require("../controllers/product_contollers");

routes.get("/product/get",GetAllProducts);
routes.post("/product/add",AddProducts);
routes.get("/product/getById/:productid",getProductById);
routes.post("/product/productUpdate",updateProduct);
routes.get("/product/delete/:productid",deleteProduct);

module.exports = routes;





