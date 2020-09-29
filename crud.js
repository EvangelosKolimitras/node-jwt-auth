const uuid = require('uuid')
let users = [];
async function getUsers(req, res, next) {
	await res
		.status(200)
		.json({ users })
}
async function getUser(req, res, next) {
	const user = users.find(user => user.id === req.params.id)
	console.log(user);
	await res
		.status(200)
		.json(user)
}
async function createUser(req, res, next) {
	const newUser = {
		id: uuid.v4(),
		name: req.body.name,
		timeStamp: req.locals
	}
	users.push(newUser)
	res.status(201).json({ newUser });
}
async function deleteUser(req, res, next) {
	const id = req.params.id;
	const userId = users.findIndex(u => u.id === id);
	const usrs = [...users.slice(0, userId), ...users.slice(userId + 1)]
	users = usrs;
	res.json({ usrs });
}

async function checkIfUserExistsInDatabase(req, res, next) {
	const name = await req.body.name;
	for (let user of users) {
		if (user.name === name) {
			return res.json({
				message: 'User already exists'
			})
		}
	}
	next();
}

module.exports = { getUser, deleteUser, getUsers, createUser, checkIfUserExistsInDatabase }