// const sequelize = require('../../configuration/dbconfig');
const category = require('../model/category.model');
const product = require('../model/product.model');


// sequelize.sync().then((result)=>{
//    //console.log("result");
// }).catch((error)=>{
//    console.log(error);
// });


exports.getAllProduct = ()=>{
   // return db.execute(`select * from product`)
   return product.findAll({ include: category ,attributes:['id','product_name','product_disc','price','qty','isAvailabe']});
   // return product.findAll({order:[['qty','ASC'],['id','DESC']]}) //getting data based on qty in ascending after that id will work as a decenting order
};

exports.addProducts = (products) => {

   // return db.execute(`insert into product (product_name,product_disc,price,qty) values(?,?,?,?) `,[products.product_name,products.product_disc,products.price,products.qty] );
   
   // const product_data = product_model.build(sample_product);
   // product_data.save().then(result => {
   //     //console.log("result");
   //     console.log(result);
   // }).catch(error => {
   //     console.log(error);
   // });

   return product.create(products);

   // let categorydataobj;
   //   return category.findByPk(categoryId)
   //             .then((categorydata)=>{
   //                categorydataobj=categorydata;         
   //                return product.create(products);                 
   //             }).then((productdata)=>{ 
   //                return  productdata.setcategory(categorydataobj);
   //             })
   //             .catch(err=>{
   //                return  err;
   //             });
      
};

exports.getProductById = (productid) => {
   // return db.execute(`select * from product where id = ?`,[productid]);
   // return product.findByPk(productid); //finding value by primery key but it will return objects only not a array
   return product.findAll({where: {id: productid}}); // it will return data as a array of objects

};

exports.UpdateProduct = (productdata) =>{
   // return db.execute(`update product set product_name = ? , product_disc = ? , price = ? , qty = ? where id = ?`,[product.productname, product.productdisc, product.price,product.qty,product.id]);
      return product.update(productdata, {where: {id: productdata.id}}); //updating data directly

      //getting data from table then reasigning values and saving the updated data
      // return product.findByPk(productdata.id).then(productdetails => {
      //    productdetails.product_name = productdata.productname;
      //    productdetails.product_disc = productdata.productdisc;
      //    productdetails.price = productdata.price;
      //    productdetails.qty = productdata.qty;
      //     productdetails.save();
      // }).catch(err => {
      //     err;
      // })
};

exports.deleteProduct = (productid) => {
   // return db.execute(`delete from product where id= ?`,[productid]);
   // return product.destroy({where: {id: productid}}) ; //deleting data directly
      return product.findByPk(productid).then(productdetail =>{
         productdetail.destroy();
      }).catch(err=>{
         err;
      });

};