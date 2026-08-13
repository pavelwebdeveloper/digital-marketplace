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
            const product = await this.productService.getProductById(
                req.params.id
            );

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