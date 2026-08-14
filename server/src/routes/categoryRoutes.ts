import { Router } from "express";

import { CategoryController } from "../controllers/CategoryController.js";
import { CategoryService } from "../services/CategoryService.js";
import { JsonCategoryRepository } from "../repositories/JsonCategoryRepository.js";

const router = Router();

const categoryRepository = new JsonCategoryRepository();
const categoryService = new CategoryService(categoryRepository);
const categoryController = new CategoryController(categoryService);

router.get("/", categoryController.getAllCategories);
router.get("/:id", categoryController.getCategoryById);

export default router;