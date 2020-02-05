const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  cid: {
    type: mongoose.Schema.Types.ObjectId
  },
  eid: {
    type: mongoose.Schema.Types.ObjectId
  },
  form: {
    type: String,
    required: true
  },
  workflow: {
    type: String,
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
module.exports = mongoose.model('Order', orderSchema)
