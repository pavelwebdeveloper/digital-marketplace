import type { Request, Response } from "express";
import { ProductService } from "../services/ProductService.js";

export class ProductController {
    constructor(private readonly productService: ProductService) {}

    getAllProducts = async (_req: Request, res: Response): Promise<void> => {
        try {
            const products = await this.productService.getAllProducts();

            res.json(products);
        } catch (error) {
            console.error(error);

            res.status(500).json({
                message: "Unable to retrieve products"
            });
        }
    };

    getProductById = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const productId = req.params.id;

            if (typeof productId !== "string") {
                res.status(400).json({
                    message: "Invalid product ID"
                });

                return;
            }

            const product = await this.productService.getProductById(productId);

            if (!product) {
                res.status(404).json({
                    message: "Product not found"
                });

                return;
            }

            res.json(product);
        } catch (error) {
            console.error(error);

            res.status(500).json({
                message: "Unable to retrieve product"
            });
        }
    };
}