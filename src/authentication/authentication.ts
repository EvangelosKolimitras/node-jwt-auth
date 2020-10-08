import { log } from "util"
import jwt from "jsonwebtoken"

export default function authenticate() {
	return function auth(req: any, res: any, next: any) {
		const token = jwt.sign(req.body, process.env.SECRET_KEY!)
		const resposne = { ...req.body, token }
		res.status(401).json(resposne)
		next()
	}
}