import { IUser } from "../models/userModel"
import jwt from "jsonwebtoken"

export default function authenticate(req: any, res: any, next: any) {
	const token = jwt.sign(req.body, process.env.SECRET_KEY!)
	const document: IUser = { ...req.body as IUser, token }
	res.locals.document = document
	next()
}