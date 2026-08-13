import { Router } from "express";

import { ProductController } from "../controllers/ProductController.js";
import { ProductService } from "../services/ProductService.js";
import { JsonProductRepository } from "../repositories/JsonProductRepository.js";

const router = Router();

const productRepository = new JsonProductRepository();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);

export default router;