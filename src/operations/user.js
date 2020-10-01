const Errored = require('../erroring/Errored.js');
const mongoose = require('mongoose');
const User = require('../models/userModel.js');

exports.getUsers = async (req, res, next) => {
	const users = await User.find()
	res
		.status(200)
		.json({ users })
}

exports.getUser = async (req, res, next) => {
	const user = await User.findOne({ _id: req.params.id })
	if (user == -1) {
		return next(new Errored("User could not be found", 404))
	}
	res
		.status(200)
		.json(user)
}

exports.createUser = async (req, res, next) => {
	// New user
	const user = await new User({
		name: req.body.name,
		email: req.body.email,
		timestamp: Date.now(),
	})
	user.save()
	res.status(201).json({ user });
}

exports.deleteUser = async (req, res, next) => {
	const user = await User.findByIdAndDelete(req.params.id)
	res.status(202).json({ user });
}

exports.updateUser = async (req, res, next) => {
	const user = await User.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		upsert: true,
		runValidator: true
	})
	res.status(200).json(user)
}

exports.isUserInDB = async (req, res, next) => {
	const user = await User.findOne({ email: req.body.email });
	if (user) {
		return res.status(409).json({
			status: "Conflict",
			message: `User with the email ${req.body.email} already exists. Please try again.`
		})
	}
	next()
}
