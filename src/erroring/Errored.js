class Errored extends Error {
	constructor(message, statusCode) {
		super(message);
		this.statuCode = statusCode;
		this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";

		this.isOperrational = true;
		Error.captureStackTrace(this, this.constructor);
	}
}

module.exports = Errored;