import { asyncErrorController } from "../utils/utils"
import connection from "../connection/connection"
import { ObjectId, InsertOneWriteOpResult } from "mongodb"
import { Request, Response } from "express"

export const getUsers = asyncErrorController(
	async (req: Request, res: Response) => {
		const { collection } = await connection()
		res.status(200).json({
			users: await collection
				.find({})
				.toArray()
		})

	}
)

export const getUser = asyncErrorController(
	async (req: Request, res: Response) => {
		const { collection } = await connection()
		const query = { _id: new ObjectId(req.params.id) };
		try {
			res
				.status(200)
				.json(
					{ users: await collection.findOne(query) }
				)
		} catch (error) {
			res.status(500).json(error)
		}
	}
)

export const createUser = asyncErrorController(
	async (req: Request, res: Response) => {
		const { collection } = await connection()
		try {
			res
				.status(201)
				.json({
					user: await collection.insertOne(req.body)
				})
		} catch (error) {
			res.status(500).json(error)
		}
	}
)

export const updateUser = asyncErrorController(
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

export const deleteUser = asyncErrorController(
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