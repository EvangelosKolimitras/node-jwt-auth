const express = require('express')
const app = express();
const port = process.env.PORT || 9090;
const routes = require('./routes.js');


app
	.use(express.json())
	.use(routes)
	.listen(port, () => console.log(port))