const express = require('express');
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const router = express.Router();
const orderSchema = require("../schemas/orderSchema");
const Order = new mongoose.model("Order", orderSchema);

router.post("/order", async (req, res) => {
    const newOrder = new Order(req.body);
    await newOrder.save((err) => {
        // await Foods(req.body).save((err) => {
        if (err) {
            res.status(500).json({
                error: "Order part Server Side Error",
            });
        } else {
            res.status(200).json({
                message: `Your Order ${req.body.title} insert in to our Database!`,
            });
        }
    });
});

// Orders Get Data
router.get("/order", async (req, res) => {
    // (Working)
    try {
        const data = await Order.find({});
        res.send({ data, message: 'Successfully loaded products', success: true });
    } catch (error) {
        res.status(500).send({ error: error, message: 'Server side error', success: false });
    }
})

module.exports = router;
