const Errored = require('./Errored.js');

async function addTimeStamp(req, res, next) {
	let timeStamp = Date.now();
	req.locals = timeStamp
	console.log(timeStamp);
	next();
}

function catchAllRouteErrors(req, res, next) {
	const err = new Errored(`Can not find ${req.originalUrl} on the server. Please check again.`, 404)
	next(err)
}

module.exports = { addTimeStamp, catchAllRouteErrors }