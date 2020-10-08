import { asyncErrorController, getQueryStringIDs, collection } from "../utils/utils"
import { ObjectId } from "mongodb"
import { Request, Response } from "express"

export default class Resource {

	public static getUsers = asyncErrorController(
		async (req: Request, res: Response) => {
			res.status(200).json({
				users: await (await collection()).aggregate([{ '$match': {} }]).toArray()
			})
		}
	)

	public static getUser = asyncErrorController(
		async (req: Request, res: Response) => {
			const query = { _id: new ObjectId(req.params.id) };
			res
				.status(200)
				.json(
					{ users: await (await collection()).findOne(query) }
				)
		}
	)

	public static createUser = asyncErrorController(
		async (req: Request, res: Response) => {
			const document = res.locals.doc
			res
				.status(201)
				.json({
					user: await (await collection()).insertOne(document)
				})
		}
	)

	public static updateUser = asyncErrorController(
		async (req: Request, res: Response) => {
			res.status(201).json({
				user: await (await collection())
					.updateOne(
						{ _id: new ObjectId(req.params.id) },
						{ $set: { ...req.body } },
						{ upsert: true }
					)
			})
		}
	)

	public static deleteUser = asyncErrorController(
		async (req: Request, res: Response) => {
			res
				.status(200)
				.json({
					user: await (await collection()).deleteOne({ _id: new ObjectId(req.params.id) })
				})
		}
	)
	public static deleteUsers = asyncErrorController(
		async (req: Request, res: Response) => {
			res
				.status(200)
				.json({
					user: await (await collection()).deleteMany(
						{
							_id: { "$in": await getQueryStringIDs((req.query.users as string).split(',')) }
						}
					)
				})
		}
	)
}

