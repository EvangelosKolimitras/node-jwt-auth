const devError = require('../erroring/devError');
const prodError = require('../erroring/prodError')

module.exports = (err, req, res, next) => {

	err.statusCode = err.statusCode || 500; /* Default to 500 if code is not defined */
	err.status = err.status || "error";

	// Different errors for different environments
	process.env.NODE_ENV === 'development' && devError(err, res) || prodError(err, res)

}