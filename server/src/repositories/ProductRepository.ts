import type { Product } from "@digital-marketplace/shared";

export interface ProductRepository {
    getAll(): Promise<Product[]>;
    getById(id: string): Promise<Product | null>;
}