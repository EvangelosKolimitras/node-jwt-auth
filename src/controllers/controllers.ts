import devError from '../erroring/devError'
import prodError from '../erroring/prodError'

export default (err: { statusCode: number; status: string; message: string, isOperational: boolean }, req: any, res: any) => {

	err.statusCode = err.statusCode || 500; /* Default to 500 if code is not defined */
	err.status = err.status || "error";

	// Different errors for different environments
	process.env.NODE_ENV === 'development' && devError(err, res) || prodError(err, res)

}