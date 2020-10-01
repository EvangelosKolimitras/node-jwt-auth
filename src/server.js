const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes/routes.js');
const { catchAllRouteErrors } = require('./utils/utils.js')
const errorController = require('./controllers/controllers.js');

// Mongo connection
require('./connection/connection.js')()

module.exports = {
	app,
	express,
	port,
	routes,
	catchAllRouteErrors,
	errorController
}