import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number
});

const orderSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    items: [itemSchema],
    totalPrice: { type: Number, required: true },
    status: { type: String, enum: ["pending", "shipped", "delivered"], default: "pending" }
});

const Order = mongoose.model("Order", orderSchema);
export default Order;