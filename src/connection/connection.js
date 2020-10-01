const mongoose = require('mongoose')
require("dotenv").config("./.env")

function connect() {
	const DB = "mongodb+srv://_username:_password@rest-db.npv4z.mongodb.net/_database"
		.replace("_username", process.env.MONGODB_USERNAME)
		.replace("_password", process.env.MONGODB_PASSWORD)
		.replace("_database", process.env.MONGODB_DATABASE)
		.replace("_options", process.env.MONGODB_OPTIONS)
	return mongoose
		.connect(DB,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
			}
		)
		.then(() => console.log("DB CONNECTED"))
}
module.exports = connect