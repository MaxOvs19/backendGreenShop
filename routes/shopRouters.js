import { Router } from "express";
import { getProduct } from "../controllers/product.js";
import { getBrands } from "../controllers/brands.js";

const router = new Router();

router.get("/get-products", getProduct);

router.get("/get-brands", getBrands);

export default router;
