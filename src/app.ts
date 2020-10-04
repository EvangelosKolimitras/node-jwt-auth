import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import routes from './routes/routes'

import { catchAllRouteErrors } from './utils/utils'
import errorController from './controllers/controllers'



app
	.use(express.json())
	.use(routes)
	.use("*", catchAllRouteErrors)
	.use(errorController)
	.listen(port)