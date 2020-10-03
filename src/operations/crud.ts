import { asyncErrorController } from "../utils/utils"
import connection from "../connection/connection"
import { InsertOneWriteOpResult, ObjectId } from "mongodb"

export const getUsers = asyncErrorController(
	async (_req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { users: any[] }): void; new(): any } } }) => {
		const { collection } = await connection()
		try {
			res.status(200).json({
				users: await collection
					.find({})
					.toArray()
			})
		} catch (error) {
			console.error(error)
		}
	}
)

export const getUser = asyncErrorController(
	async (req: { params: { id: string | number | ObjectId } }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { users: any }): void; new(): any } } }) => {
		const { collection, ObjectId } = await connection()
		const query = { _id: new ObjectId(req.params.id) };
		try {
			res
				.status(200)
				.json(
					{ users: await collection.findOne(query) }
				)
		} catch (error) {
			console.error(error)
		}
	}
)

export const createUser = asyncErrorController(
	async (req: { body: any }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { user: InsertOneWriteOpResult<any> }): void; new(): any } } }) => {
		const { collection } = await connection()
		try {
			res
				.status(201)
				.json({
					user: await collection.insertOne(req.body)
				})
		} catch (error) {
			console.error(error)
		}
	}
)

export const updateUser = asyncErrorController(
	async (req, res) => {
		const { collection, ObjectId } = await connection()
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
	async (req, res) => {
		const { collection, ObjectId } = await connection()
		try {
			res
				.status(200)
				.json({
					user: await collection.deleteOne({ _id: new ObjectId(req.params.id) })
				})
		} catch (error) {
			console.error(error)
		}
	}
)