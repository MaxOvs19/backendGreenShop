import { ObjectId } from "mongodb";
import Product from "../models/Product.js";

export const getProduct = async (req, res) => {
  try {
    const products = await Product.find();

    if (!products) {
      return res.json({ messege: "Товаров нет" });
    }

    res.json({ products });
  } catch (error) {
    res.json({ messege: "Что то пошло не так!" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { id, type, sku, title, image, quantity, brand, regular_price } =
      req.body;

    const isProduct = await Product.findOne({ sku: sku });

    if (isProduct) {
      res.json({
        messege: "Такой товар уже есть!",
      });
    }

    const newProduct = new Product({
      id,
      type,
      sku,
      regular_price,
      title,
      image,
      brand,
      quantity,
    });

    await newProduct.save();

    res.json({
      newProduct,
      message: "Добавленн новый продукт",
    });
  } catch (error) {
    res.json({ messege: "Что то пошло не так!" });
  }
};
