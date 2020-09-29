
async function addTimeStamp(req, res, next) {
	let timeStamp = Date.now();
	req.locals = timeStamp
	console.log(timeStamp);
	next();
}

function erroring(err) {
	console.error(`Error ${err}`)
}

module.exports = { addTimeStamp, error: erroring }