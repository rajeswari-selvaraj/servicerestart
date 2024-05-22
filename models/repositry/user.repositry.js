const user = require("../model/User.model");

exports.getUserDetails = () => {
  return user.findAll();
};

exports.addUserDetails = (userData) => {
  return user.create(userData);
};

exports.getUserDetailsById = (userId) => {
  return user.findByPk(userId);
};

exports.updateUserDetails = (userUdData, userId) => {
  return user.update(userUdData, { where: { id: userId } });
};

exports.deleteUserDetails = (userId) => {
  return user.destroy({ where: { id: userId } });
};

exports.emailVerification = (userId) => {
  // return user.update(userUdData, { where: { id: userId } });
  return user.update({isEmailVerified:true}, { where: { id: userId } });
};
