const uuid = require('uuid');
const Errored = require('../erroring/Errored.js');
const { asyncErrorController } = require("../utils/utils.js")
let users = [];

const getUsers = asyncErrorController(function (req, res, next) {
	res
		.status(200)
		.json({ users })
})
const getUser = asyncErrorController(function (req, res, next) {
	const user = users.find(user => user.id === req.params.id)

	if (!user) {
		return next(new Errored("User could not be found", 404))
	}
	res
		.status(200)
		.json()
})
const createUser = asyncErrorController((req, res, next) => {
	const newUser = {
		id: uuid.v4(),
		name: req.body.name,
		timeStamp: req.locals
	}
	users.push(newUser)
	res.status(201).json({ newUser });
})
const deleteUser = asyncErrorController(function (req, res, next) {
	const userId = users.findIndex(u => u.id === req.params.id);
	if (userId == -1) {
		return next(new Errored("User could not be found", 404))
	}
	const usrs = [...users.slice(0, userId), ...users.slice(userId + 1)]
	users = usrs;
	res.json({ usrs });
})
const checkIfUserExistsInDatabase = asyncErrorController(function (req, res, next) {
	for (let user of users) {
		if (user.name === req.body.name) {
			return res.json({
				message: 'User already exists'
			})
		}
	}
	next();
})

module.exports = { getUser, deleteUser, getUsers, createUser, checkIfUserExistsInDatabase }