const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		lowercase: true,
		unique: true,
},
  username: { 
	  type: String,
	  required: true,
	  unique: true,
	  minlength: 3,
	  maxlength: 20,
	  trim: true,
  },
  password: {
	type: String,
	required: true,
	minlength: 8,
	maxlength: 50,
  }
});

module.exports = mongoose.model('user', userSchema);