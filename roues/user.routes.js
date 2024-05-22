const express = require("express");
const router = express.Router();

const {
  getUserDatas,
  addUserData,
  getUserDataById,
  updateUserData,
  deleteUserData,
  emailverification,
} = require("../controllers/user_controller");



router.get("/user/getdetails", getUserDatas);
router.post("/user/addData", addUserData);
router.get("/user/getdatabyid/:uid", getUserDataById);
router.post("/user/updatauserData", updateUserData);
router.get("/user/deletedatauserData/:uid", deleteUserData);
router.get("/user/emailVerification/:uid",emailverification);

module.exports = router;
