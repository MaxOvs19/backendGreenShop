import Brand from "../models/Brand.js";

export const getBrands = async (req, res) => {
  try {
    const brands = await Brand.find();

    if (!brands) {
      return res.json({ messege: "Бренды отсутствуют!" });
    }

    res.json({ brands });
  } catch (error) {
    res.json({ messege: "Что то пошло не так!" });
  }
};
