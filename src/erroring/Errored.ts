export default class Errored extends Error {
	statuCode: number;
	status: string;
	isOperrational: boolean;
	constructor(message: string, statusCode: number) {
		super(message);
		this.statuCode = statusCode;
		this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";

		this.isOperrational = true;
		Error.captureStackTrace(this, this.constructor);
	}
}
