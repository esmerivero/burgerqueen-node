const express = require('express');
const router = express.Router();

// Modelo de la orden
const Order = require('../../models/Order');

// @route GET api/orders
// @desc GET all orders
router.get('/', (req, res) =>{
    Order.find()
    .sort({date: -1})
    .then(orders => res.json(orders))
});

// @route post api/orders
// @desc create a post
router.post('/', (req, res) =>{
    const newOrder = new Order({
        name: req.body.name,
        status: req.body.status,
        total: req.body.total
    });

    newOrder.save().then(order => res.json(order));
});

module.exports = router;