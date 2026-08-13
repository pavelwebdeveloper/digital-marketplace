import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

import type { Product } from "@digital-marketplace/shared";
import type { ProductRepository } from "./ProductRepository.js";

export class JsonProductRepository implements ProductRepository {
    private readonly filePath: string;

    constructor() {
        const currentFilePath = fileURLToPath(import.meta.url);
        const currentDirectory = path.dirname(currentFilePath);

        this.filePath = path.resolve(
            currentDirectory,
            "../../data/products.json"
        );
    }

    async getAll(): Promise<Product[]> {
        const fileContent = await readFile(this.filePath, "utf-8");

        return JSON.parse(fileContent) as Product[];
    }

    async getById(id: string): Promise<Product | null> {
        const products = await this.getAll();

        return products.find(product => product.id === id) ?? null;
    }
}