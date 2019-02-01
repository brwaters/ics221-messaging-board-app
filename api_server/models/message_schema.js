const messageSchema = new mongoose.Schema({ name: {
    type: String,
    required: true,
    maxlength: 20
},
  msg: String
});

module.exports('./models/message_schema');