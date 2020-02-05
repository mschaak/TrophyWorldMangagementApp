const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
  email: {
      type: String,
      required: true,
      unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phonenumber: {
    type: String,
    required: true,
    unique: true
  },
  createAt:{
    type: Date,
    required: true,
    default: Date.now

  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now
  }


})
module.exports = mongoose.model('Customer', customerSchema)
