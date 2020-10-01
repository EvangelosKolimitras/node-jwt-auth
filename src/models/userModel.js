const uuid = require('uuid');
const db = { users: [] };
class User {
	constructor() {
		this.users = db.users;
	}

	getUsers = async (req, res, next) => {
		res
			.status(200)
			.json({ users: this.users })
	}

	createUser = async (req, res, next) => {
		// New user
		const user = {
			id: uuid.v4(),
			name: req.body.name,
			timeStamp: req.locals
		}
		this.users.push(user)
		res.status(201).json({ user });
	}

	getUser = async (req, res, next) => {
		const user = this.users.find(user => user.id === req.params.id)
		if (user == -1) {
			return next(new Errored("User could not be found", 404))
		}
		res
			.status(200)
			.json(user)
	}

	deleteUser = async (req, res, next) => {
		const userId = this.users.findIndex(u => u.id === req.params.id);
		if (userId == -1) {
			return next(new Errored("User could not be found", 404))
		}
		const usersAfterDeletingUserID = [...this.users.slice(0, userId), ...this.users.slice(userId + 1)]
		this.users = usersAfterDeletingUserID
		res.status(202).json({ usersAfterDeletingUserID });
	}

	isUserInDB = async (req, res, next) => {
		for (let user of this.users) {
			if (user.name === req.body.name) {
				return res.status(409).json({
					status: "Conflict",
					message: 'User already exists'
				})
			}
		}
		next();
	}
}

module.exports = User
