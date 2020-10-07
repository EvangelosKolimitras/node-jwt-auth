import { asyncErrorController } from "../utils/utils"
import connection from "../connection/connection"
import { ObjectId } from "mongodb"
import { Request, Response } from "express"

export default class Resource {

	public static getUsers = asyncErrorController(
		async (req: Request, res: Response) => {
			const { collection } = await connection()
			res.status(200).json({
				users: await collection.aggregate([{ '$match': {} }]).toArray()
			})
		}
	)

	public static getUser = asyncErrorController(
		async (req: Request, res: Response) => {
			const { collection } = await connection()
			const query = { _id: new ObjectId(req.params.id) };
			res
				.status(200)
				.json(
					{ users: await collection.findOne(query) }
				)
		}
	)

	public static createUser = asyncErrorController(
		async (req: Request, res: Response) => {
			const { collection } = await connection()
			res
				.status(201)
				.json({
					user: await collection.insertOne(req.body)
				})
		}
	)

	public static updateUser = asyncErrorController(
		async (req: Request, res: Response) => {
			const { collection } = await connection()
			res.status(201).json({
				user: await collection
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
			const { collection } = await connection()
			try {
				res
					.status(200)
					.json({
						user: await collection.deleteOne({ _id: new ObjectId(req.params.id) })
					})
			} catch (error) {
				res.status(500).json(error)
			}
		}
	)
}
