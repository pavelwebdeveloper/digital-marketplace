import type { Category } from "@digital-marketplace/shared";

export interface CategoryRepository {
    getAll(): Promise<Category[]>;
    getById(id: string): Promise<Category | null>;
}