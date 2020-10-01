const Errored = require('../erroring/Errored.js');
const { asyncErrorController } = require("../utils/utils.js");
const User = require('../models/userModel');

const { getUser, getUsers, createUser, deleteUser, isUserInDB } = new User();

exports.getUsers = asyncErrorController(getUsers)
exports.getUser = asyncErrorController(getUser)
exports.createUser = asyncErrorController(createUser)
exports.deleteUser = asyncErrorController(deleteUser)
exports.isUserInDB = asyncErrorController(isUserInDB)