
const routes = require('express').Router();
const { addTimeStamp } = require('./utils')
const { getUser, getUsers, deleteUser, createUser, checkIfUserExistsInDatabase } = require('./crud')


routes
	.get('/users/:id', getUser)
	.get('/users', getUsers)
	.post('/user', checkIfUserExistsInDatabase, addTimeStamp, createUser)
	.delete('/users/:id', deleteUser)

module.exports = routes
