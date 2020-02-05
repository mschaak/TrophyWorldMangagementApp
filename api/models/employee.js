const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
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
  admin: {
    type: Boolean,
    required: true

  },
  master: {
    type: Boolean,
    required: true
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
module.exports = mongoose.model('Employee', employeeSchema)
