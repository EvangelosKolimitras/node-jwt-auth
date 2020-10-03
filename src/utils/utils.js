const Errored = require('../erroring/Errored.js');

function catchAllRouteErrors(req, res, next) {
	next(new Errored(`Can not find ${req.originalUrl} on the server. Please check again.`, 404))
}

function asyncErrorController(asyncFn) {
	return function (req, res, next) {
		asyncFn(req, res, next).catch(next)
	}
}

module.exports = { catchAllRouteErrors, asyncErrorController }