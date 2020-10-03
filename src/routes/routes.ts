
import routes from 'express'
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../operations/crud'

export default routes
	.Router()
	.get('/users/:id', getUser)
	.get('/users', getUsers)
	.post('/users/create/user', createUser)
	.patch('/users/update/user/:id', updateUser)
	.delete("/users/delete/user/:id", deleteUser)
