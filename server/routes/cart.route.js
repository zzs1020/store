var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Cart = require('../models/cart.model.js');

/* todo: should remove, GET ALL carts */
router.get('/', function(req, res, next) {
  Cart.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE cart BY ID */
router.get('/:id', function(req, res, next) {
  Cart.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* add cart item */
router.post('/:id', function(req, res, next) {
  console.log('ereere---------------')
  Cart.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    const cart = post;
    cart.cartItems.push(req.body);
    cart.preTotal = cart.cartItems.reduce((sum, item) => {
      return sum + item.product.price * item.product.discount * item.quantity - item.promo;
    }, 0);
    cart.generalDiscount = cart.preTotal * 0.1;
    cart.tax = (cart.preTotal - cart.generalDiscount) * 0.1;
    cart.total = cart.preTotal + cart.tax - cart.generalDiscount;

    Cart.findByIdAndUpdate(req.params.id, cart, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
});

/* UPDATE cart */
router.put('/:id', function(req, res, next) {
  Cart.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE cart */
router.delete('/:id', function(req, res, next) {
  Cart.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
