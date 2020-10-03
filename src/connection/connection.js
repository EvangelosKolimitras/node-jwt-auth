const { MongoClient, ObjectId } = require("mongodb")
require("dotenv").config("./.env")

function createUrlString() {
	return process.env.MONGODB_URL
		.replace("_username", process.env.MONGODB_USERNAME)
		.replace("_password", process.env.MONGODB_PASSWORD)
		.replace("_database", process.env.MONGODB_DATABASE)
}

async function connection() {
	const server = new MongoClient(createUrlString(), { useUnifiedTopology: true })
	const client = await server.connect();
	const database = client.db("rest-db")
	const collection = database.collection("users")
	return {
		collection,
		ObjectId
	}
}

module.exports = connection