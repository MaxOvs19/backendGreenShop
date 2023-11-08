import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  type: String,
  id: Number,
  sku: String,
  title: String,
  regular_price: {
    currency: String,
    value: Number,
  },
  image: String,
  brand: Number,
  quantity: Number,
});

export default model("Product", ProductSchema);
