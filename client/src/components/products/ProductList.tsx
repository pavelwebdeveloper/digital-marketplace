import type { Product } from "@digital-marketplace/shared";
import { ProductCard } from "./ProductCard";

interface ProductListProps {
    products: Product[];
}

export function ProductList({ products }: ProductListProps) {
    if (products.length === 0) {
        return <p>No products available.</p>;
    }

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}