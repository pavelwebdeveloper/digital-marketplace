import { useEffect, useState } from "react";

import type { Product } from "@digital-marketplace/shared";

import { getProducts } from "../services/api";
import { ProductList } from "../components/products/ProductList";

export function MarketplacePage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadProducts() {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                console.error(error);
                setError("Unable to load products.");
            } finally {
                setLoading(false);
            }
        }

        loadProducts();
    }, []);

    if (loading) {
        return <p>Loading products...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <main>
            <h1>Digital Marketplace</h1>

            <p>
                Discover digital products created by independent developers
                and creators.
            </p>

            <ProductList products={products} />
        </main>
    );
}