
async function addTimeStamp(req, res, next) {
	let timeStamp = Date.now();
	req.locals = timeStamp
	console.log(timeStamp);
	next();
}

module.exports = { addTimeStamp }