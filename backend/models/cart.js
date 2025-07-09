const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: false,
  },
  items: [
    {
      menuItemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MenuItem',
        required: true,
      },
      amount: {
        type: Number,
        required: true,
        min: 1,
      },
    },
  ],
})

module.exports = mongoose.model('Cart', cartSchema)
