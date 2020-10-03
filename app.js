const { app, express, routes, catchAllRouteErrors, errorController, port } = require("./src/server.js")

app
	.use(express.json())
	.use(routes)
	.use("*", catchAllRouteErrors)
	.use(errorController)
	.listen(port, () => console.log(port))
