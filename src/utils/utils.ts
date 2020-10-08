import { ObjectId } from 'mongodb';
import Errored from '../erroring/Errored'

export function catchAllRouteErrors(req: { originalUrl: any }, res: any, next: (arg0: Errored) => void) {
	next(new Errored(`Can not find ${req.originalUrl} on the server. Please check again.`, 404))
}

export function asyncErrorController(asyncFn: Function) {
	return (req: any, res: any, next: any) => asyncFn(req, res, next).catch(next)
}

export async function getQueryStringIDs(query: string[], ids: ObjectId[] = []) {
	query.forEach((id: string) => ids.push(new ObjectId(id)))
	return ids
}