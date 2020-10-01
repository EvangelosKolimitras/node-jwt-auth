
const routes = require('express').Router();
const { addTimeStamp } = require('../utils/utils.js')
const { getUser, getUsers, deleteUser, createUser, checkIfUserExistsInDatabase } = require('../operations/crud.js')


routes
	.get('/users/:id', getUser)
	.get('/users', getUsers)
	.post('/user', checkIfUserExistsInDatabase, addTimeStamp, createUser)
	.delete('/users/:id', deleteUser)

module.exports = routes
