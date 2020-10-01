const { asyncErrorController } = require("../utils/utils.js");

const { getUser, getUsers, createUser, deleteUser, isUserInDB, updateUser } = require('./user');

exports.getUsers = asyncErrorController(getUsers)
exports.getUser = asyncErrorController(getUser)
exports.createUser = asyncErrorController(createUser)
exports.updateUser = asyncErrorController(updateUser)
exports.deleteUser = asyncErrorController(deleteUser)
exports.isUserInDB = asyncErrorController(isUserInDB)