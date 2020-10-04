import Errored from '../erroring/Errored'

export function catchAllRouteErrors(req: { originalUrl: any }, res: any, next: (arg0: Errored) => void) {
	next(new Errored(`Can not find ${req.originalUrl} on the server. Please check again.`, 404))
}

export function asyncErrorController(asyncFn) {
	return (req: any, res: any, next: any) => asyncFn(req, res, next).catch(next)
}
