const mongoose = require('mongoose')

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  picture: {
    type: String,
    required: false,
  },
})

module.exports = mongoose.model('MenuItem', menuItemSchema)
