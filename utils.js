
async function addTimeStamp(req, res, next) {
	let timeStamp = Date.now();
	req.locals = timeStamp
	console.log(timeStamp);
	next();
}

async function catchAllRouteErrors(req, res, next) {
	res.status(404).json({
		status: "failed",
		type: "Route error",
		message: `Can not find ${req.originalUrl} on the server. Please check again.`
	});
}

module.exports = { addTimeStamp, catchAllRouteErrors }