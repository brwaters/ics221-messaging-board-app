const mongoose = require('mongoose');
const messageModel = mongoose.model('message');

// GET Request Handler
const getAllMessagesOrderedByLastPosted = (req, res) =>
	messageModel
		.find()
		.sort({ '_id': -1 })
		.exec((err, messages) => {
			if (err) {
				res.status(404).json(err);
			} else {
				res.status(200).json(messages);
			}
		});

// POST Request Handler
const addNewMessage = (req, res) =>
	messageModel
		.create(req.body, (err, message) => {
			if (err) {
				res.status(400).json(err);
			} else {
				res.status(201).json(message);
			}
		});

// PUT Request Handler
const updateMessage  = (req, res) =>
		messageModel
			.findOneAndUpdate( {_id: req.params.messageid}, { $set: { msg: req.body.msg} }, {new: true}, (err, message) => {
				console.log("req.user: " + req.user + " " + "req.body" + req.body)
				if (false /*req.user !== req.body.username*/) {
					res.status(403).json("This message doesn't belong to you.");
				}
				if (err) {
					res.status(400).json(err);
				} else {
					res.status(200).json(message);
				}
			});

// DELETE Request Handler
const deleteMessage  = (req, res) =>
		messageModel
		.deleteOne( {_id: req.params.messageid}, (err, message) => {
				if (err) {
					res.status(400).json(err);
				} else {
					res.status(200).json(message);
				}
			});

module.exports = {
	getAllMessagesOrderedByLastPosted,
	addNewMessage,
	updateMessage,
	deleteMessage
}