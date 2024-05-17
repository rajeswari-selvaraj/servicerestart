const {getAllProduct,addProducts,getProductById,UpdateProduct,deleteProduct} = require('../models/repositry/product.repositry');


exports.GetAllProducts = (req,res) =>{
    getAllProduct().then((data)=>{
        var result = [];
        for(let i =0;i<data.length;i++)
            result = [...result,data[i].dataValues];
        // console.log(result);
        res.send(result);
    })
    .catch(error => {
        console.log(error);
        res.send("internal server error");
    });    
};

exports.AddProducts = (req,res) => {
    // const categoryId= req.body.cid;
    const products = {
        product_name:req.body.productname,
        product_disc:req.body.productdisc,
        price:req.body.price,
        qty:req.body.qty,
        categoryId:req.body.cid
    }

    // var result = addProducts(products,categoryId);

    // res.send(result);
    addProducts(products).then((data)=>{
        res.send(data);
    }).catch(error => {
        console .log(error);
        res.send("internal server error");
    });

};

exports.getProductById = (req,res) => {

    getProductById(req.params.productid).then((data)=>{
        res.send(data);
        // res.send("[data]");
    }).catch((error)=>{
        console.log(error)
        res.send("internal server error");
    });
};

exports.updateProduct = (req,res) =>{
    const  productdetails = {
        product_name : req.body.productname,
        product_disc : req.body.productdisc,
        price : req.body.price,
        qty : req.body.qty,
        categoryId:req.body.cid,
        id: req.body.id
    }
  UpdateProduct(productdetails).then((data)=>{
        res.send(data);
    }).catch(error=>{
        console.log(error);
        res.send("internal server error");
    })    
};

exports.deleteProduct = (req,res) => {

    deleteProduct(req.params.productid).then((dt)=>{    
       res.send([dt]);
    }).catch(err=>{
        console.log(err);
    });
}

