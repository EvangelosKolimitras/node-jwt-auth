const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes.js');
const { catchAllRouteErrors } = require('./utils.js')

app
	.use(express.json())
	.use(routes)
	.use("*", catchAllRouteErrors)
	.listen(port, () => console.log(port))