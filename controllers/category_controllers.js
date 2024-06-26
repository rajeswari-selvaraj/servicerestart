const {
  getCategotyDetails,
  addcategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../models/repositry/category.repositry");
const { errorHandle } = require("../utils/ErrorFiles/errorHandler");

exports.getCategoryDetail = (req, res) => {
  getCategotyDetails()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      errorHandle(err);
      res.send("internal server error");
    });
};

exports.addCategoryDetail = (req, res) => {
  const cData = {
    title: req.body.title,
    category_desc: req.body.desc,
  };
  addcategory(cData)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      errorHandle(err);
      res.send("internal server error");
    });
};

exports.getCategoryDataById = (req, res) => {
  // console.log(req.params.categeoryid)
  getCategoryById(req.params.cid)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      errorHandle(err);
      res.send("internal server error");
    });
};

exports.updateCategoryDetail = (req, res) => {
  const cateData = {
    title: req.body.title,
    category_desc: req.body.desc,
    id: req.body.cid,
  };
  updateCategory(cateData)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      errorHandle(err);
      res.send("internal server error");
    });
};

exports.deleteCategoryDetail = (req, res) => {
  deleteCategory(req.params.cid)
    .then((data) => {
      res.send([data]);
    })
    .catch((err) => {
      errorHandle(err);
      res.send("internal server error");
    });
};
