import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

import type { Category } from "@digital-marketplace/shared";
import type { CategoryRepository } from "./CategoryRepository.js";

export class JsonCategoryRepository implements CategoryRepository {
    private readonly filePath: string;

    constructor() {
        const currentFilePath = fileURLToPath(import.meta.url);
        const currentDirectory = path.dirname(currentFilePath);

        this.filePath = path.resolve(
            currentDirectory,
            "../../data/categories.json"
        );
    }

    async getAll(): Promise<Category[]> {
        const fileContent = await readFile(this.filePath, "utf-8");

        return JSON.parse(fileContent) as Category[];
    }

    async getById(id: string): Promise<Category | null> {
        const categories = await this.getAll();

        return categories.find(category => category.id === id) ?? null;
    }
}