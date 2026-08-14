import type { Request, Response } from "express";
import { CategoryService } from "../services/CategoryService.js";

export class CategoryController {
    constructor(
        private readonly categoryService: CategoryService
    ) {}

    getAllCategories = async (
        _req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const categories =
                await this.categoryService.getAllCategories();

            res.json(categories);
        } catch (error) {
            console.error(error);

            res.status(500).json({
                message: "Unable to retrieve categories"
            });
        }
    };

    getCategoryById = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const category =
                await this.categoryService.getCategoryById(
                    req.params.id
                );

            if (!category) {
                res.status(404).json({
                    message: "Category not found"
                });

                return;
            }

            res.json(category);
        } catch (error) {
            console.error(error);

            res.status(500).json({
                message: "Unable to retrieve category"
            });
        }
    };
}