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
