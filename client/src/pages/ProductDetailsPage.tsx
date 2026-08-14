import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import type { Product } from "@digital-marketplace/shared";

import { getProductById } from "../services/api";

export function ProductDetailsPage() {
    const { id } = useParams<{ id: string }>();

    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadProduct() {
            if (!id) {
                setError("Product ID is missing.");
                setLoading(false);
                return;
            }

            try {
                const data = await getProductById(id);
                setProduct(data);
            } catch (error) {
                console.error(error);
                setError("Unable to load product.");
            } finally {
                setLoading(false);
            }
        }

        loadProduct();
    }, [id]);

    if (loading) {
        return <p>Loading product...</p>;
    }

    if (error || !product) {
        return (
            <main>
                <p>{error ?? "Product not found."}</p>
                <Link to="/products">Back to products</Link>
            </main>
        );
    }

    return (
        <main>
            <Link to="/products">← Back to products</Link>

            <h1>{product.title}</h1>

            <p>{product.description}</p>

            <p>
                <strong>${product.price.toFixed(2)}</strong>
            </p>

            <p>Category: {product.categoryId}</p>

            {product.tags.length > 0 && (
                <div>
                    {product.tags.map(tag => (
                        <span key={tag}>{tag} </span>
                    ))}
                </div>
            )}

            <button type="button">
                Buy Now
            </button>
        </main>
    );
}