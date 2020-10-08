import { log } from "util"
import jwt from "jsonwebtoken"
import { AsyncLocalStorage } from "async_hooks"

export default function authenticate(req: any, res: any, next: any) {
	const token = jwt.sign(req.body, process.env.SECRET_KEY!)
	const document = { ...req.body, token }
	res.locals.doc = document
	next()
}