const uuid = require('uuid')
let users = [];
async function getUsers(req, res, next) {
	try {
		await res
			.status(200)
			.json({ users })
	} catch (error) {
		console.log(`Error ${error}`);
	}
}
async function getUser(req, res, next) {
	try {
		const user = users.find(user => user.id === req.params.id)
		console.log(user);
		await res
			.status(200)
			.json(user)
	} catch (error) {
		console.error(`Error ${error}`)
	}
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
	} catch (error) {
		console.error(`Error ${error}`)
	}
}
async function deleteUser(req, res, next) {
	try {
		const id = await req.params.id;
		const userId = users.findIndex(u => u.id === id);
		const usrs = [...users.slice(0, userId), ...users.slice(userId + 1)]
		users = usrs;
		res.json({ usrs });
	} catch (error) {
		console.error(`Error ${error}`)
	}
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
	} catch (error) {
		console.error(`Erorr ${error}`)
	}
}

module.exports = { getUser, deleteUser, getUsers, createUser, checkIfUserExistsInDatabase }