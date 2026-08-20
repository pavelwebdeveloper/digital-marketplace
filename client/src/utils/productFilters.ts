import type { Product } from "@digital-marketplace/shared";

export function filterProducts(
    products: Product[],
    searchTerm: string,
    selectedCategory: string | null
): Product[] {
    const normalizedSearchTerm = searchTerm
        .trim()
        .toLowerCase();

    return products.filter(product => {
        const matchesCategory =
            selectedCategory === null ||
            product.categoryId === selectedCategory;

        const matchesSearch =
            normalizedSearchTerm === "" ||
            product.title
                .toLowerCase()
                .includes(normalizedSearchTerm) ||
            product.description
                .toLowerCase()
                .includes(normalizedSearchTerm) ||
            product.tags.some(tag =>
                tag.toLowerCase().includes(normalizedSearchTerm)
            );

        return matchesCategory && matchesSearch;
    });
}