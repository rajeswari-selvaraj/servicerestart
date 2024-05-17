const express = require('express');
const router = express.Router();
const {getCategoryDetail,addCategoryDetail,getCategoryDataById,updateCategoryDetail,deleteCategoryDetail}= require("../controllers/category_controllers");

router.get("/category/getDetails",getCategoryDetail);
router.post("/category/addDetails",addCategoryDetail);
router.get("/category/getDetailById/:cid",getCategoryDataById);
router.post("/category/updateCategoryDetail",updateCategoryDetail);
router.get("/category/deleteCategoryDetail/:cid",deleteCategoryDetail);

module.exports = router;