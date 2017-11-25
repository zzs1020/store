const mongoose = require('mongoose');

// this will auto match my db's carts collection
const CartSchema = new mongoose.Schema({
  _id: String, // the same with user id
  tax: Number,
  preTotal: Number, //total before applying cart level discount and tax
  total: Number,
  generalDiscount: Number,
  cartItems: [{product: mongoose.Schema.Types.Mixed, promo: Number, quantity: Number}],
  updatedTime: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Cart', CartSchema);
