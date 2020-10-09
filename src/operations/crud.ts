import { asyncErrorController, getQueryStringIDs, collection } from "../utils/utils"
import { ObjectId } from "mongodb"
import { Request, Response } from "express"
import { IUser } from '../models/userModel'
export default class Resource {

	public static getUsers = asyncErrorController(
		async (_req: Request, res: Response) => res.status(200).json({
			users: await (await collection()).aggregate([{ '$match': {} }]).toArray()
		})
	)

	public static getUser = asyncErrorController(
		async (req: Request, res: Response) => res.status(200).json({
			users: await (await collection()).findOne({ _id: new ObjectId(req.params.id) })
		})
	)

	public static createUser = asyncErrorController(
		async (_req: Request, res: Response) => res.status(201).json({
			user: await (await collection()).insertOne((res.locals as IUser).document)
		})

	)

	public static updateUser = asyncErrorController(
		async (req: Request, res: Response) => res.status(201).json({
			user: await (await collection()).updateOne(
				{ _id: new ObjectId(req.params.id) },
				{ $set: { ...req.body } },
				{ upsert: true }
			)
		})
	)

	public static deleteUser = asyncErrorController(
		async (req: Request, res: Response) => res.status(200).json({
			user: await (await collection()).deleteOne({ _id: new ObjectId(req.params.id) })
		})
	)

	public static deleteUsers = asyncErrorController(
		async (req: Request, res: Response) => {
			const query = req.query.users as string
			let resourceToDelete;
			if (query === "*") {
				resourceToDelete = {}
			} else {
				resourceToDelete = { _id: { "$in": await getQueryStringIDs(query.split(',')) } }
			}
			res.status(200).json({ user: await (await collection()).deleteMany(resourceToDelete) })
		}
	)
}