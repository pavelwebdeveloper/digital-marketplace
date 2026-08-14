import type { Product } from "@digital-marketplace/shared";

const API_URL = import.meta.env.VITE_API_URL;

export async function getHealth() {
    const response = await fetch(`${API_URL}/health`);

    if (!response.ok) {
        throw new Error("Failed to connect to the API");
    }

    return response.json();
}

export async function getProducts(): Promise<Product[]> {
    const response = await fetch(`${API_URL}/products`);

    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }

    return response.json();
}

export async function getProductById(
    id: string
): Promise<Product> {
    const response = await fetch(`${API_URL}/products/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch product");
    }

    return response.json();
}