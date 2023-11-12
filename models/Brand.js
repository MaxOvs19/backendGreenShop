import { Schema, model } from "mongoose";

const BrandSchema = new Schema({
  _id: String,
  id: Number,
  sort: String,
  code: String,
});

export default model("Brand", BrandSchema);
