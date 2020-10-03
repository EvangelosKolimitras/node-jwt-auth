const { asyncErrorController } = require("../utils/utils.js");
const connection = require("../connection/connection.js")

exports.getUsers = asyncErrorController(
	async (req, res) => {
		const { collection, ObjectId } = await connection()
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

exports.getUser = asyncErrorController(
	async (req, res) => {
		const { collection, ObjectId } = await connection()
		const query = { _id: ObjectId(req.params.id) };
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

exports.createUser = asyncErrorController(
	async (req, res) => {
		const { collection, ObjectId } = await connection()
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

exports.updateUser = asyncErrorController(
	async (req, res) => {
		const { collection, ObjectId } = await connection()
		res.status(201).json({
			user: await collection
				.updateOne(
					{ _id: ObjectId(req.params.id) },
					{ $set: { ...req.body } },
					{ upsert: true }
				)
		})
	}
)

exports.deleteUser = asyncErrorController(
	async (req, res) => {
		const { collection, ObjectId } = await connection()
		try {
			res
				.status(200)
				.json({
					user: await collection.deleteOne({ _id: ObjectId(req.params.id) })
				})
		} catch (error) {
			console.error(error)
		}
	}
)