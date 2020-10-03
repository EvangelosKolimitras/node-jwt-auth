export default (err, res) => res.status(err.statusCode).json({
	status: err.status,
	error: err,
	message: err.message
});