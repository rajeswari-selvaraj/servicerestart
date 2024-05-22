require("dotenv").config;
const verificationPath = process.env.verification_Path;
const {
  getUserDetails,
  addUserDetails,
  getUserDetailsById,
  updateUserDetails,
  deleteUserDetails,
  emailVerification,
} = require("../models/repositry/user.repositry");
const { errorHandle } = require("../utils/ErrorFiles/errorHandler");
const { sendMail } = require("../utils/verificationMail");

exports.getUserDatas = (req, res) => {
  getUserDetails()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      errorHandle(err);
      res.send("internal server error");
    });
};

exports.addUserData = (req, res) => {
  const userDetails = req.body;
  addUserDetails(userDetails)
    .then((data) => {
      //console.log(data.dataValues.id);
      const msg = verificationPath+data.dataValues.id;

      let mailres = sendMail(req.body.Mail, msg);
      res.send({ ...data, mailres });
      // res.send(data);
    })
    .catch((err) => {
      errorHandle(err);
      res.send("internal server error");
    });
};

exports.getUserDataById = (req, res) => {
  getUserDetailsById(req.params.uid)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      errorHandle(err);
      res.send("internal server error");
    });
};

exports.updateUserData = (req, res) => {
  const userdata = req.body;
  updateUserDetails(userdata, req.body.userId)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      errorHandle(err);
      res.send("internal server error");
    });
};

exports.deleteUserData = (req, res) => {
  deleteUserDetails(req.params.uid)
    .then((data) => {
      res.send([data]);
    })
    .catch((err) => {
      errorHandle(err);
      res.send("internal server error");
    });
};

exports.emailverification = (req, res) => {
  emailVerification(req.params.uid)
    .then(() => {
      res.send("Your email verified successfully...");
    })
    .catch((err) => {
      errorHandle(err);
      res.send("internal server error");
    });
};
