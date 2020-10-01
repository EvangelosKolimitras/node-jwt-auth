module.exports = (err, res) => res.statusCode(err.statusCode).json({
	status: err.status,
	error: err,
	message: err.message
});