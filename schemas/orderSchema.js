const mongoose = require("mongoose");
const orderSchema = mongoose.Schema(
    {
        email: String,
        title: String,
        img: String,
        totalPrice: Number,
        size: Number,
        quantity: Number,
    },
    { timestamps: true }
);

module.exports = orderSchema;