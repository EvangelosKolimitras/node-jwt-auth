import { DbCreateOptions, MongoClient, ObjectId } from "mongodb"
import dotenv from "dotenv"

dotenv.config()

export function createUrlString(): string {
	return process.env.MONGODB_URL
		.replace("_username", process.env.MONGODB_USERNAME)
		.replace("_password", process.env.MONGODB_PASSWORD)
		.replace("_database", process.env.MONGODB_DATABASE)
}

async function connection() {
	const server: MongoClient = new MongoClient(createUrlString(), { useUnifiedTopology: true })
	const client = await server.connect();
	const database = client.db("rest-db")
	const collection = database.collection("users")
	return { collection }
}

export default connection