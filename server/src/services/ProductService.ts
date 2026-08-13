import type { Product } from "@digital-marketplace/shared";
import type { ProductRepository } from "../repositories/ProductRepository.js";

export class ProductService {
    constructor(private readonly productRepository: ProductRepository) {}

    async getAllProducts(): Promise<Product[]> {
        return this.productRepository.getAll();
    }

    async getProductById(id: string): Promise<Product | null> {
        return this.productRepository.getById(id);
    }
}