const erroring = require("./utils")
const uuid = require('uuid')
let users = [];

async function getUsers(req, res, next) {
	try {
		await res
			.status(200)
			.json({ users })
	} catch (erroring) { }
}

async function getUser(req, res, next) {
	try {
		const user = users.find(user => user.id === req.params.id)
		console.log(user);
		await res
			.status(200)
			.json(user)
	} catch (erroring) { }
}

async function createUser(req, res, next) {
	try {
		const newUser = {
			id: uuid.v4(),
			name: req.body.name,
			timeStamp: req.locals
		}
		users.push(newUser)
		res.status(201).json({ newUser });
	} catch (erroring) { }
}

async function deleteUser(req, res, next) {
	try {
		const id = await req.params.id;
		const userId = users.findIndex(u => u.id === id);
		const usrs = [...users.slice(0, userId), ...users.slice(userId + 1)]
		users = usrs;
		res.json({ usrs });
	} catch (erroring) { }
}

async function checkIfUserExistsInDatabase(req, res, next) {
	try {
		const name = await req.body.name;
		for (let user of users) {
			if (user.name === name) {
				return res.json({
					message: 'User already exists'
				})
			}
		}
		next();
	} catch (erroring) { }
}

module.exports = { getUser, deleteUser, getUsers, createUser, checkIfUserExistsInDatabase }