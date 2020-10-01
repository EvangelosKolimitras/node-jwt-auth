const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	timestamp: {
		type: Date,
	},
})


module.exports = User = mongoose.model("User", UserSchema)