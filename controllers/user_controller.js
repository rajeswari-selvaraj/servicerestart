const {
  getUserDetails,
  addUserDetails,
  getUserDetailsById,
  updateUserDetails,
  deleteUserDetails,
} = require("../models/repositry/user.repositry");
const { errorHandle } = require("../utils/ErrorFiles/errorHandler");

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
      res.send(data);
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
