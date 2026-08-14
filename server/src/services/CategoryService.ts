import type { Category } from "@digital-marketplace/shared";
import type { CategoryRepository } from "../repositories/CategoryRepository.js";

export class CategoryService {
    constructor(
        private readonly categoryRepository: CategoryRepository
    ) {}

    async getAllCategories(): Promise<Category[]> {
        return this.categoryRepository.getAll();
    }

    async getCategoryById(id: string): Promise<Category | null> {
        return this.categoryRepository.getById(id);
    }
}