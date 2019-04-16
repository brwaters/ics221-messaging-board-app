const mongoose = require("mongoose");
const messageModel = mongoose.model("message");

// GET Request Handler
const getAllMessagesOrderedByLastPosted = (req, res) =>
  messageModel
    .find()
    .sort({ _id: -1 })
    .exec((err, messages) => {
      if (err) {
        res.status(404).json(err);
      } else {
        res.status(200).json(messages);
      }
    });

// POST Request Handler
const addNewMessage = (req, res) =>
  messageModel.create(req.body, (err, message) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).json(message);
    }
  });

// PUT Request Handler
const updateMessage = (req, res) => {
  // console.log("update func: req.user: " + req.user + " " + "req: " + req.body.name);
  // console.log(req.params);
  messageModel.findById(
    {
      _id: req.params.messageid
    },
    (err, message) => {
      if (err) {
        res.status(404).json(err);
        console.log("Didn't find id");
        return;
      }
      if (message.name == req.user.username) {
        messageModel.findOneAndUpdate(
          { _id: req.params.messageid },
          { $set: { msg: req.body.msg } },
          { new: true },
          (err, message) => {
            if (err) {
              res.status(400).json(err);
              console.log("didn't set body");
            } else {
              res.status(200).json(message);
            }
          }
        );
      } else {
        res.status(403).json("Invalid permission");
      }
    }
  );
};

// DELETE Request Handler
const deleteMessage = (req, res) => {
  console.log("del func: req.user: " + req.user + " " + "req: " + req.body.name);
  console.log(req.params);
  messageModel.findById(
    {
      _id: req.params.messageid
    },
    (err, message) => {
      if (err) {
        res.status(404).json(err);
        return;
      }
      if (message.name == req.user.username) {
        messageModel.deleteOne(
          { _id: req.params.messageid },
          (err, message) => {
            if (err) {
              res.status(400).json(err);
            } else {
              res.status(200).json(message);
            }
          }
        );
      } else {
        res.status(403).json("Invalid permission");
      }
    }
  );
};
// // DELETE Request Handler
// const deleteMessage = (req, res) =>
//   messageModel.deleteOne({ _id: req.params.messageid }, (err, message) => {
//     if (err) {
//       res.status(400).json(err);
//     } else {
//       res.status(200).json(message);
//     }
//   });

module.exports = {
  getAllMessagesOrderedByLastPosted,
  addNewMessage,
  updateMessage,
  deleteMessage
};
