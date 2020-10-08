import routes from 'express'
import Resource from '../operations/crud'
import authenticate from '../authentication/authentication'
export default routes
	.Router()
	.get('/users/:id', Resource.getUser)
	.get('/users', Resource.getUsers)
	.post('/users/create/user', Resource.createUser)
	.patch('/users/update/user/:id', Resource.updateUser)
	.delete("/users/delete/user/:id", Resource.deleteUser)
	.delete("/users/delete/users", Resource.deleteUsers)

