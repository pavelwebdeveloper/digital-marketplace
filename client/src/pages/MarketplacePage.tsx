import { useEffect, useState } from "react";

import type {
    Category,
    Product
} from "@digital-marketplace/shared";

import {
    getCategories,
    getProducts
} from "../services/api";

import { CategoryList } from "../components/products/CategoryList";
import { ProductList } from "../components/products/ProductList";
import { ProductSearch } from "../components/products/ProductSearch";
import { filterProducts } from "../utils/productFilters";

export function MarketplacePage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] =
        useState<string | null>(null);

    const [searchTerm, setSearchTerm] = useState("");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadData() {
            try {
                const [productsData, categoriesData] =
                    await Promise.all([
                        getProducts(),
                        getCategories()
                    ]);

                setProducts(productsData);
                setCategories(categoriesData);
            } catch (error) {
                console.error(error);
                setError("Unable to load marketplace data.");
            } finally {
                setLoading(false);
            }
        }

        loadData();
    }, []);

    if (loading) {
        return <p>Loading marketplace...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    const filteredProducts = filterProducts(
        products,
        searchTerm,
        selectedCategory
    );

    return (
        <main>
            <h1>Digital Marketplace</h1>

            <p>
                Discover digital products created by
                independent developers and creators.
            </p>

            <ProductSearch
                value={searchTerm}
                onChange={setSearchTerm}
            />  

            <CategoryList
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            {filteredProducts.length > 0 ? (
                <ProductList products={filteredProducts} />
            ) : (
                <p className="no-results">
                    No products found.
                </p>
            )}
        </main>
    );
}