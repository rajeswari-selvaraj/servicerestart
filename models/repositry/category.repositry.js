// const categorySequelize = require("../../configuration/dbconfig");
const category = require("../model/category.model");

// categorySequelize.sync().then(()=>{console.log("category connected")}).catch(err=>{console.log(err)});

exports.getCategotyDetails = () => {
    return category.findAll();
};

exports.addcategory = (categoryData) =>{
    return category.create(categoryData);
};

exports.getCategoryById = (cId)=>{
    return category.findAll({where:{id:cId}});
};

exports.updateCategory = (categoryData)=>{
    return category.update(categoryData,{where:{id:categoryData.id}});
};

exports.deleteCategory = (cId)=>{
    return category.destroy({where: {id:cId}});
};
