
const routes = require('express').Router();
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../operations/crud')

routes
	.get('/users/:id', getUser)
	.get('/users', getUsers)
	.post('/users/create/user', createUser)
	.patch('/users/update/user/:id', updateUser)
	.delete("/users/delete/user/:id", deleteUser)

module.exports = routes
